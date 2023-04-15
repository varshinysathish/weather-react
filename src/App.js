import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Sinagpore" />
      </div>
      <footer>
        <a
          href="https://github.com/varshinysathish/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Varshiny Sathishkumar
      </footer>
    </div>
  );
}

export default App;
