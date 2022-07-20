import React from "react";
import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import DigitalClock from "./components/DigitalClock";
import Quotes from "./components/Quotes";
import UserGreet from "./components/UserGreet";

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <DigitalClock />
      <UserGreet />
      <Quotes />
    </div>
  );
}

export default App;
