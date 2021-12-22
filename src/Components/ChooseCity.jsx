import React, { useState } from "react";
import { AllCities } from "../Database/israeli-cities";
import { useSelector, useDispatch } from "react-redux";
import { changeCity } from "../Actions/cityActions";
import { getWeather } from "../Actions/weatherActions";
import { getLongLat } from "../Controllers/getJsonData";
const shortid = require("shortid");

export default function ChooseCity() {
  const Dispatch = useDispatch();
  const weatherReducer = useSelector((state) => state.weatherReducer);
  const currentCity = useSelector((state) => state.city);

  window.addEventListener("load", (e) => {
    callgetWeather();
  });

  const callgetWeather = () => {
    Dispatch(
      getWeather(getLongLat(currentCity).latt, getLongLat(currentCity).long)
    );
  };

  return (
    <>
      <label>Choose a City In Israel:</label>
      <br />
      <input
        defaultValue={currentCity}
        list="cities"
        onBlur={(e) => {
          Dispatch(changeCity(e.target.value));
          callgetWeather();
        }}
        name="cities"
      />
      <datalist style={{ overflow: "auto" }} id="cities">
        {AllCities.map((city) => {
          return <option key={shortid.generate()} value={city.english_name} />;
        })}
      </datalist>
    </>
  );
}
