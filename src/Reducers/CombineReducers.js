import { combineReducers } from "redux";
import loggedReducer from "./islogged";
import counterReducer from "./couter";

const AppReducers = combineReducers({
  logged: loggedReducer,
  counter: counterReducer,
});

export default AppReducers;
