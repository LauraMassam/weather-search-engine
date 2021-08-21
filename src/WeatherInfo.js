import React from "react";
import FormattedDay from "./FormattedDay";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    console.log(props.data)
    return(
    
<div className = "weather-info">
    <div className="row">
        <div className="col-8">
            <h1 className = "text-capitalize text-truncate current-city">
                {props.data.city}
            </h1>
        </div> 
        <div className="col-4 current-date">
            <h3>
                 < FormattedDay date = {props.data.date} />
                 < FormattedTime date = {props.data.date} />
            </h3>
        </div>
    </div>
    
        <div className="row">
            <div className="col-6 weather-icon">
                <WeatherIcon 
                code = {props.data.icon}
                alt = {props.data.description}
                />
            <div className="row description">
                    <strong>
                    {props.data.description}
                    </strong>
            </div>
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
        </div>

    <div className="row">
            <div className="row weather-details">
                <div className="col humidity">
                    Humidity: {props.data.humidity}% 
                </div>
                <div className="col wind">
                    Wind: {props.data.wind}km/h
                </div>
                <div className="col sunrise">
                    sunrise: {""}
                    < FormattedTime date = {props.data.sunrise} />
                </div>
                <div className="col sunset">
                    sunset: {""}
                    < FormattedTime date = {props.data.sunset} />
                </div>
            </div>
    </div>
</div>
    );
}
