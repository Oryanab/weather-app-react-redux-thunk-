import React, { useState } from "react";
import { AllCities } from "../Database/israeli-cities";

export default function ChooseCity() {
  const [city, setCity] = useState("");
  return (
    <>
      <h1>{city}</h1>
      <label>Choose a City In Israel:</label>
      <br />
      <input
        defaultValue={city}
        list="cities"
        name="cities"
        onChange={(e) => setCity(e.target.value)}
      />
      <datalist style={{ overflow: "auto" }} id="cities">
        {AllCities.map((city) => {
          return <option key={city.latt} value={city.english_name} />;
        })}
      </datalist>
    </>
  );
}
