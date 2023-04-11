import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Singapore",
    temperature: 28,
    date: "Tuesday 15:54",
    description: "Broken clouds",
    imgUrl: "http://openweathermap.org/img/wn/04d@2x.png",
    humidity: 76,
    wind: 8,
  };

  return (
    <div className="Weather-React">
      <div className="Weather">
        <form id="search-form" className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control search-button"
                id="city-input"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <button>Search</button>
            </div>
          </div>
          <br />
        </form>
        <div className="overview">
          <h1 id="city">{weatherData.city}</h1>
          <ul>
            <li className="dt-desc">
              Last updated:{" "}
              <span className="dt-desc" id="date">
                {weatherData.date}
              </span>
            </li>
            <li className="dt-desc description" id="description">
              {weatherData.description}
            </li>
          </ul>
          <br />
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <div className="float-left">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  id="icon"
                  className="float-left"
                />
                <strong id="temperature">{weatherData.temperature}</strong>
                <span className="units"> °C </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity:
                <span className="humidity-wind">
                  <span id="humidity"></span> {weatherData.humidity}%
                </span>
              </li>
              <li>
                Wind:
                <span className="humidity-wind">
                  <span id="wind"></span> {weatherData.humidity} km/h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <a href="https://github.com/varshinysathish/weather-react">
          Open-source code
        </a>
        , by Varshiny Sathishkumar
      </footer>
    </div>
  );
}
