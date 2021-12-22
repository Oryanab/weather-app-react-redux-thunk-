import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Actions/counterActions";

function App() {
  const Dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <button onClick={() => Dispatch(increment())}>+</button>
      <span>counter: {counter}</span>
      <button onClick={() => Dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
