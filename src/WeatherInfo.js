import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1 id="city">{props.data.city}</h1>
        <ul>
          <li className="dt-desc">
            <FormattedDate date={props.data.date} />
          </li>
          <li className="dt-desc description text-capitalize" id="description">
            {props.data.description}
          </li>
        </ul>
        <br />
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <div className="float-left">
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                id="icon"
                className="float-left"
              />
              <strong id="temperature">
                {Math.round(props.data.temperature)}
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
                <span id="humidity"></span> {props.data.humidity}%
              </span>
            </li>
            <li>
              Wind:
              <span className="humidity-wind">
                <span id="wind"></span> {props.data.wind} km/h
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
