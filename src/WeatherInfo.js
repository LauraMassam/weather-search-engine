import React from "react";
import FormattedDay from "./FormattedDay";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return(
    
    <div className="row">
        <div className="col-8">
            <h1 className = "text-capitalize">
                {props.data.city}
            </h1>
        </div>
        <div className="col-4">
            <h3>
                 < FormattedDay date = {props.data.date} />
                 < FormattedTime date = {props.data.date} />
            </h3>
        </div>

        <div className="row">
            <div className="col-6">
                <WeatherIcon 
                code = {props.data.icon}
                alt = {props.data.description}
                />
            </div>
            <div className="col-6 temperature">
                <span className = "current-temperature">
                    {props.data.temperature}
                </span>
                <span className = "temp-measurements">
                    °C | F 
                </span>             
                    
                <div className = "high-low-temp">
                    {props.data.tempMin}° | {""}
                        <strong>
                            {props.data.tempMax}
                            </strong>
                            °
                </div>
                <div className = "feels-like">
                    feels like : {props.data.feelsLike}°
                </div>
            </div>

            <div className="row weather-details">
                <div className="col">
                        humidity: {props.data.humidity}%
                </div>
                <div className="col">
                        Wind: {props.data.wind}km/h
                </div>
                <div className="col">
                        sunrise: 
                        < FormattedTime date = {props.data.sunrise} />
                </div>
                <div className="col">
                        sunset: 
                        < FormattedTime date = {props.data.sunset} />
                </div>
            </div>
        </div>
    </div>
    );
}
