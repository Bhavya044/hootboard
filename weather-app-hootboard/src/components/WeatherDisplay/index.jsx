import React from "react";
import "./weather-display.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faLocationDot);
const WeatherDisplay = ({ weatherInfo }) => {
  return (
    <div className="weather-display">
      <img src={weatherInfo?.condition?.icon} height={120} alt="Weather icon" />
      <div className="temperature"> {weatherInfo?.temperature}°C</div>
      <div className="condition">{weatherInfo?.condition?.text}</div>
      <div className="location">
        <FontAwesomeIcon size="1x" className="icon" icon={faLocationDot} />
        {weatherInfo?.location}
      </div>
    </div>
  );
};

export default WeatherDisplay;
