import { AllCities } from "../Database/israeli-cities";
import { WEATHER_CODES } from "../Database/weather-code";

// a function get a temp code return string
export const getWeatherCode = (code) => {
  return WEATHER_CODES[code];
};

// a function gets a name return long, lat
export const getLongLat = (cityName) => {
  const currentCity = AllCities.find((city) => city.english_name === cityName);
  return currentCity;
};
