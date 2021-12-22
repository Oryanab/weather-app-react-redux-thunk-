export const changeCity = (cityName) => {
  return {
    type: "CHANGE_CITY",
    payload: { city: cityName },
  };
};
