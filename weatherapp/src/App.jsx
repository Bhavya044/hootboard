import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTemperatureLow,
  faWind,
  faTint,
  faCloud,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import WeatherDisplay from "./components/WeatherDisplay";
import Clouds from "./animations/clouds.gif";
import Moon from "./animations/night.gif";

// import ErrorMessage from "./ErrorMessage";
import "./styles.css";
import Skeleton from "./components/Skeleton/Skeleton";
import ErrorMessage from "./components/Error/ErrorMessage";
library.add(faTemperatureLow, faWind, faTint, faCloud, faSun);

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const fetchWeatherData = async (location) => {
    setWeatherInfo({ data: null, loading: true, error: null });
    console.log("locato", location);
    try {
      const apiKey = process.env.REACT_APP_WEATHERMAP_API_KEY;
      const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=2`;

      const { data } = await axios.get(apiUrl);

      setWeatherInfo({
        data: data,
        loading: false,
        error: null,
      });
    } catch (err) {
      const { response } = err;
      setWeatherInfo({
        data: null,
        loading: false,
        error: response?.data?.error?.message,
      });
    }
  };

  const { data, loading, error } = weatherInfo;
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const isDay = hours >= 6 && hours < 18;

  const background = isDay ? Clouds : Moon;
  console.log("error", error);

  return (
    <div
      className="flex flex-col h-screen  border rounded-sm w-screen relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`, // Use the imported GIF image
      }}
    >
      <SearchForm fetchWeatherData={fetchWeatherData} />
      {loading ? (
        <div className="m-auto">
          <Skeleton />
        </div>
      ) : null}
      {error && (
        <div className="m-auto">
          <ErrorMessage message={error} />
        </div>
      )}
      {data && <WeatherDisplay weatherData={data} />}
    </div>
  );
};

export default App;
