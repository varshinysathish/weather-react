import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form id="search-form" className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control search-button"
                autoFocus="on"
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
              <FormattedDate date={weatherData.date} />
            </li>
            <li
              className="dt-desc description text-capitalize"
              id="description"
            >
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
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  id="icon"
                  className="float-left"
                />
                <strong id="temperature">
                  {Math.round(weatherData.temperature)}
                </strong>
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
                  <span id="wind"></span> {weatherData.wind} km/h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9ece65da0f72264bfe679ddf770d6e93";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); //ajax call

    return "Loading...";
  }
}
