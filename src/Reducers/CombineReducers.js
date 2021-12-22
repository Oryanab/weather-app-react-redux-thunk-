import { combineReducers } from "redux";

import counterReducer from "./couter";
import weatherReducer from "./weatherReducer";

const AppReducers = combineReducers({
  counter: counterReducer,
  weatherReducer: weatherReducer,
});

export default AppReducers;
