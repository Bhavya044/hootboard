import React, { useState } from "react";

function SearchForm({ fetchWeatherData }) {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location?.trim() !== "") {
      fetchWeatherData(location);
    }
  };

  console.log("location in", location);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center mt-4"
    >
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location..."
        className="px-4 py-2 border rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Get Weather
      </button>
    </form>
  );
}

export default SearchForm;
