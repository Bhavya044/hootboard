import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons"; // Replace with the desired icon
import ForeCastPerDay from "./ForecastPerDay";

const WeatherForecast = ({ forecast }) => {
  return (
    <div className="bg-opacity-70 bg-white backdrop-blur-lg p-4 rounded-lg">
      <div className="p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          Weather Forecast
          <FontAwesomeIcon icon={faSun} className="text-yellow-500 ml-2" />
        </h2>
        <div className="flex flex-col gap-5">
          {forecast?.map((weather) => {
            return <ForeCastPerDay details={weather} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
