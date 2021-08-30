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
            <div className="row currentWeatherDescription">
                    <strong>
                    {props.data.description}
                    </strong>
            </div>
            </div>
            <div className="col-6 temperature">
                <WeatherTemperature 
                celsius={props.data.temperature}
                feelsLike={props.data.feelsLike}
                tempMin={props.data.tempMin}
                tempMax={props.data.tempMax}
                />
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
                    Sunrise: {""}
                    < FormattedTime date = {props.data.sunrise} />
                </div>
                <div className="col sunset">
                    Sunset: {""}
                    < FormattedTime date = {props.data.sunset} />
                </div>
            </div>
    </div>
</div>
    );
}
