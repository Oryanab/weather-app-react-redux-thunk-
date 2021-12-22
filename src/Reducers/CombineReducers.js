import { combineReducers } from "redux";

import cityReducer from "./cityReducer";
import weatherReducer from "./weatherReducer";

const AppReducers = combineReducers({
  city: cityReducer,
  weatherReducer: weatherReducer,
});

export default AppReducers;
