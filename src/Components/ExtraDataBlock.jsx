import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeather } from "../Actions/weatherActions";

export default function ExtraDataBlock() {
  const Dispatch = useDispatch();
  const weatherReducer = useSelector((state) => state.weatherReducer);
  const currentCity = useSelector((state) => state.city);
  return (
    <div className="mini-div">
      <div>
        <h5>Current Time</h5>
        <p>{new Date().toLocaleTimeString()}</p>
      </div>
      <hr />
      <div>
        <h5>wind speed</h5>
        <p>{weatherReducer["current_weather"].windspeed}</p>
      </div>
      <hr />
      <div>
        <h5>Longitude</h5>
        <p>{weatherReducer.longitude}</p>
      </div>
      <hr />
      <div>
        <h5>Latitude</h5>
        <p>{weatherReducer.latitude}</p>
      </div>
    </div>
  );
}
