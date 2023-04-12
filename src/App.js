import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <small>
        <a
          href="https://github.com/varshinysathish/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Varshiny Sathishkumar
      </small>
    </div>
  );
}

export default App;
