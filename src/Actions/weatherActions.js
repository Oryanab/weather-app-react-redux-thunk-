import axios from "axios";

export const getWeather = (latitude, longitude) => async (dispatch) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&precipitation_unit`;
  let response = await axios.get(url);
  dispatch({ type: "FETCH_WEATHER", payload: { data: response.data } });
};
