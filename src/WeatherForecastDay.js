import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay(props){
    function maxTemperature (){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }
    function minTemperature (){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }
    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days  = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
        return days[day];
    }

    return (
    <div className="WeatherForecast-row">
        <div className = "WeatherForecast-day">
            {day()}
        </div>
        <div className="WeatherForecast-icon">
        <WeatherIcon code = {props.data.weather[0].icon} 
                     size = {50} />
        </div>
        <span className = "WeatherForecast-temperatureMax">
            {maxTemperature()}
        </span>
        <span className = "WeatherForecast-temperatureDivider">
            {""} | {""}
        </span>
        <span className = "WeatherForecast-temperatureMin">
            {minTemperature()}
        </span>         
    </div>
);
}