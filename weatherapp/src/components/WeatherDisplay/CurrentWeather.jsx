import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataPreview from "../DataDisplay/DataPreview";
import { currentWeatherSections } from "./weather.config";

const CurrentWeather = ({ headerIcon, title, data }) => {
  console.log("data", data);
  return (
    <div className="bg-white w-full rounded-lg p-4">
      <div className="flex gap-1">
        <h2 className="text-xl font-semibold">{title}</h2>
        <FontAwesomeIcon icon={headerIcon} className="text-gray-500 text-2xl" />
      </div>

      <div className="w-full flex md:flex-row flex-col p-8 md:gap-0 gap-5 justify-between m-auto rounded-lg">
        <DataPreview config={currentWeatherSections} data={data} />
      </div>
    </div>
  );
};

export default CurrentWeather;
