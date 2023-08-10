import DataPreview from "../DataDisplay/DataPreview";
import { perDayForecastSection } from "./weather.config";
import { formatTimeFromEpoch } from "../../utils/functions";
const ForeCastPerDay = ({ details }) => {
  const dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][new Date(details?.date).getDay()];

  const hourlyForecast = details?.hour ?? [];
  const forecastEvery6Hours = hourlyForecast.filter(
    (hour, index) => index % 6 === 0
  );

  return (
    <div className="flex  flex-col">
      <div className="text-xl text-gray-600">{dayName}</div>
      <div className="bg-blue-300 border-blue-300 mt-2 border bg-opacity-10 md:gap-0 gap-4  p-4 rounded-sm md:flex-row flex flex-col justify-between">
        <DataPreview data={details?.day} config={perDayForecastSection} />
      </div>
      <div className=" bg-opacity-10 md:gap-0 gap-4  p-4 rounded-sm md:flex-row flex flex-col justify-between">
        {forecastEvery6Hours?.map((forecastHour, index) => (
          <div className="flex flex-col">
            <span className="font-semibold text-blue-900 text-xl">
              {formatTimeFromEpoch(forecastHour?.time_epoch)}
            </span>
            <div>{forecastHour?.temp_c} °C</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ForeCastPerDay;
