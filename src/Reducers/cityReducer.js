const cityReducer = (state = "tel aviv - yafo", action) => {
  switch (action.type) {
    case "CHANGE_CITY":
      return (state = action.payload.city);
    default:
      return state;
  }
};

export default cityReducer;
