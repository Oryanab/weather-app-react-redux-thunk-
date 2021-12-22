import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Actions/counterActions";
import ExtraDataBlock from "./Components/ExtraDataBlock";
import ChooseCity from "./Components/ChooseCity";
import { getWeather } from "./Actions/weatherActions";

function App() {
  const Dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const weatherReducer = useSelector((state) => state.weatherReducer);

  const callgetWeather = () => {
    Dispatch(getWeather(32.08088, 34.78057));
  };

  return (
    <div className="main-div">
      <button onClick={() => callgetWeather()}>clickMe</button>
      <h2>Location</h2>
      <h4>weather code</h4>
      <h1>30 C</h1>
      <h5>{weatherReducer["current_weather"].time}</h5>
      <hr />
      <div className="mini-div">
        <div>
          <h5>Current Time</h5>
          <p>15:00</p>
        </div>
        <hr />
        <div>
          <h5>wind speed</h5>
          <p>12.6</p>
        </div>
        <hr />
        <div>
          <h5>Longitude</h5>
          <p>34.75</p>
        </div>
        <hr />
        <div>
          <h5>Latitude</h5>
          <p>32.0625</p>
        </div>
      </div>
      <hr />
      <button onClick={() => Dispatch(increment())}>+</button>
      <span>counter: {counter}</span>
      <button onClick={() => Dispatch(decrement())}>-</button>
      <ExtraDataBlock />
      <ChooseCity />
    </div>
  );
}

export default App;
