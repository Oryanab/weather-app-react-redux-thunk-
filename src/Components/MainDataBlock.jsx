import React from "react";
import { useSelector, useDispatch, useEffect } from "react-redux";
import { getWeather } from "../Actions/weatherActions";
import { getWeatherCode } from "../Controllers/getJsonData";

export default function MainDataBlock() {
  const Dispatch = useDispatch();
  const weatherReducer = useSelector((state) => state.weatherReducer);
  const currentCity = useSelector((state) => state.city);
  const weatherCode = getWeatherCode(
    weatherReducer["current_weather"].weathercode
  );

  return (
    <div>
      <h2>{currentCity}</h2>
      <h4>{weatherCode}</h4>
      <h1>{weatherReducer["current_weather"].temperature} °C</h1>
      <h5>{new Date().toLocaleDateString()}</h5>
    </div>
  );
}
