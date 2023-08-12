import React, { useState } from "react";
import "./search-weather.css";

const SearchWeather = ({ fetchWeather, loading }) => {
  const [inputValue, setInputValue] = useState("");

  const handleGetCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          fetchWeather(`${latitude},${longitude}`, 1);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation is not available in this browser.");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchWeather(inputValue, 1);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        id="cityInput"
        placeholder="Enter City Name"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterKeyPress}
      />

      <div className="divider-container">
        <div className="divider"></div>
        <div className="divider-text">or</div>
        <div className="divider"></div>
      </div>
      <button onClick={handleGetCurrentLocation} className="locationButton">
        Get Device Location
      </button>
      {loading ? <div className="spinner"></div> : null}
    </div>
  );
};

export default SearchWeather;
