import React from "react";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import { currentWeatherSections } from "./weather.config";
import { faCloudMeatball } from "@fortawesome/free-solid-svg-icons";

function WeatherDisplay({ weatherData }) {
  const { temp_c, temp_f, wind_kph, wind_dir, humidity, cloud } =
    weatherData.current;

  console.log("condition", weatherData);
  const { forecast } = weatherData;

  return (
    <div className="w-full flex justify-between flex-col gap-4  mt-2 p-4">
      <CurrentWeather
        sections={currentWeatherSections}
        headerIcon={faCloudMeatball}
        title={"Current Weather"}
        data={{ cloud, humidity, temp_c, temp_f, wind_dir, wind_kph }}
      />
      <WeatherForecast forecast={forecast.forecastday} />
    </div>
  );
}

export default WeatherDisplay;
