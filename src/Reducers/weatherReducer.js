const initialState = {
  elevation: "DEFAULT",
  longitude: "DEFAULT",
  current_weather: {
    winddirection: "DEFAULT",
    windspeed: "DEFAULT",
    weathercode: "DEFAULT",
    time: "DEFAULT",
    temperature: "DEFAULT",
  },
  latitude: "DEFAULT",
  utc_offset_seconds: "DEFAULT",
  generationtime_ms: "DEFAULT",
};
const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return (state = action.payload.data);
    default:
      return state;
  }
};

export default weatherReducer;
