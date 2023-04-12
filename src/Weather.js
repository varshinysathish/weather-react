import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const apiKey = "9ece65da0f72264bfe679ddf770d6e93";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API key}&units=metric`;
  axios.get(apiUrl).then(handleResponse); //ajax call
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
  );
}
