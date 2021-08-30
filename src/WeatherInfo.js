import React from "react";
import FormattedDay from "./FormattedDay";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
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
                <div className = "row current-day">
                 < FormattedDay date = {props.data.date} />
                </div>
                <div className = "row current-time">
                 < FormattedTime date = {props.data.date} />
                 </div>
            </h3>
        </div>
    </div>
    
        <div className="row">
            <div className="col-6 weather-icon">
                <WeatherIcon 
                code = {props.data.icon}
                alt = {props.data.description}
                size = {130}
                />
            <div className="currentWeatherDescription">
                    <strong>
                    {props.data.description}
                    </strong>
            </div>
            </div>

            <div className="col-6 temperature-details">
                <div className="temperature">
                <WeatherTemperature 
                celsius={props.data.temperature}
                tempMin={props.data.tempMin}
                tempMax={props.data.tempMax}
                feelsLike={props.data.feelsLike}
                />
                </div>
            
                <div className="weather-details">
                <div className = "humidity-and-wind">
                <span className="humidity">
                    Humidity: {props.data.humidity}% 
                </span>
                <span className="wind">
                    Wind: {props.data.wind}km/h
                </span>
                </div>

                <div className = "sunrise-and-sunset">
                <span className="sunrise">
                    Sunrise: {""} < FormattedTime date = {props.data.sunrise} /> 
                </span>
                <span className ="sunset">
                    {""} Sunset: {""}  < FormattedTime date = {props.data.sunset} />
                </span>
                </div>
            </div>
            </div>
        </div>
</div>
    );
}
