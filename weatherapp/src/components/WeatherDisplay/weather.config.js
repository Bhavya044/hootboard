import {
  faTemperatureLow,
  faWind,
  faTint,
  faCloud,
  faSun,
  faCloudSun,
} from "@fortawesome/free-solid-svg-icons";

export const currentWeatherSections = [
  {
    icon: faTemperatureLow,
    title: "Temperature",
    dataKey: "temp_c",
    unit: "°C",
  },
  {
    icon: faWind,
    title: "Wind",
    dataKey: "wind_kph",
    unit: "km/h",
  },
  {
    icon: faWind,
    title: "Wind Direction",
    dataKey: "wind_dir",
    unit: "%",
  },
  {
    icon: faTint,
    title: "Humidity",
    dataKey: "humidity",
    unit: "%",
  },
  {
    icon: faCloud,
    title: "Cloud",
    dataKey: "cloud",
    unit: "%",
  },
];

export const perDayForecastSection = [
  {
    icon: faTemperatureLow,
    title: "Average Temperature",
    dataKey: "avgtemp_c",
    unit: "°C",
  },
  {
    icon: faTint,
    title: "Average Humidity",
    dataKey: "avghumidity",
    unit: "%",
  },
  {
    icon: faSun,
    title: "UV",
    dataKey: "uv",
  },
  {
    icon: faCloudSun,
    title: "Condition",
    dataKey: "condition.text",
  },
];
