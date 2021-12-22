import React from "react";
import ExtraDataBlock from "./Components/ExtraDataBlock";
import ChooseCity from "./Components/ChooseCity";
import MainDataBlock from "./Components/MainDataBlock";

function App() {
  return (
    <div className="main-div">
      <MainDataBlock />
      <hr />
      <ExtraDataBlock />
      <hr />
      <ChooseCity />
    </div>
  );
}

export default App;
