import { useState } from "react";
import "./styles.css";
import SearchWeather from "./components/SearchWeather.tsx/index.jsx";
import axios from "axios";
import WeatherDisplay from "./components/WeatherDisplay";
import Footer from "./components/Footer";
import {
  faArrowLeft,
  faDroplet,
  faTemperatureEmpty,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorMessage from "./components/Error/ErrorMessage";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [weatherInfo, setWeatherInfo] = useState({});

  const fetchWeatherData = async (location, page) => {
    setWeatherInfo({ data: null, loading: true, error: null });
    if (!location) {
      setWeatherInfo({
        data: null,
        loading: false,
        error: "Please provide an appropriate input",
      });
    } else {
      try {
        const apiKey = process.env.REACT_APP_WEATHERMAP_API_KEY;
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
        const { data } = await axios.get(apiUrl);
        setWeatherInfo({
          data: data,
          loading: false,
          error: null,
        });
        setCurrentPage(page);
      } catch (err) {
        const { response } = err;
        setWeatherInfo({
          data: null,
          loading: false,
          error: response?.data?.error?.message,
        });
      } finally {
        setWeatherInfo((prev) => ({ ...prev, loading: false }));
      }
    }
  };

  const footerConfig = [
    {
      title: "Feels like",
      icon: faTemperatureEmpty,
      value: weatherInfo?.data?.current?.feelslike_c,
    },
    {
      title: "Humidity",
      icon: faDroplet,
      value: weatherInfo?.data?.current?.humidity,
    },
  ];

  return (
    <div className="container">
      <div className="header">
        {currentPage > 0 ? (
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            icon={faArrowLeft}
          />
        ) : null}{" "}
        Weather App
      </div>

      {currentPage === 0 ? (
        <>
          <SearchWeather
            setLoading={(loading) => {
              setWeatherInfo((prev) => ({ ...prev, loading: loading }));
            }}
            loading={weatherInfo?.loading}
            fetchWeather={fetchWeatherData}
          />
          {weatherInfo?.error?.length ? (
            <ErrorMessage message={weatherInfo?.error} />
          ) : null}
        </>
      ) : currentPage === 1 &&
        weatherInfo?.data &&
        Object.values(weatherInfo?.data) ? (
        <>
          <WeatherDisplay
            weatherInfo={{
              temperature: weatherInfo?.data?.current?.temp_c,
              condition: weatherInfo?.data?.current?.condition,
              location: `${weatherInfo?.data?.location?.name}, ${weatherInfo?.data?.location?.region}`,
            }}
          />
          <Footer config={footerConfig} />
        </>
      ) : null}
    </div>
  );
}

export default App;
