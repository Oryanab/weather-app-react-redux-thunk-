import { fs } from "fs";
const path = require("path");

const getCitiesDataBase = () => {
  let dataBase = fs.readFileSync(
    path.resolve(__dirname, "../Database/israeli-cities.json")
  );
  let dataBaseJson = JSON.parse(dataBase.toString());
  return dataBaseJson;
};

const findSingleCity = (cityName) => {
  let database = getCitiesDataBase();
  const searchCity = database.find((city) => city.english_name === cityName);
  return searchCity;
};

const getWeatherCodesDataBase = () => {
  let dataBase = fs.readFileSync(
    path.resolve(__dirname, "../Database/weather-code.json")
  );
  let dataBaseJson = JSON.parse(dataBase.toString());
  return dataBaseJson;
};

module.exports = {
  getCitiesDataBase,
  findSingleCity,
  getWeatherCodesDataBase,
};
