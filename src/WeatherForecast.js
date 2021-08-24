import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";  

export default function WeatherForecast(props){
    function handleResponse (response){
        console.log(response.data);
    }
    let apiKey ="9aaa9a2a183bbe9e6cb58bc031908f93";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

return(
    <div className = "WeatherForecast">
        <div className ="row">
            <div className = "col">
                <div className = "WeatherForecast-day">
                    Wednesday
                </div>
                <WeatherIcon code = "01d" size = {80} />
                <span className = "WeatherForecast-temperatureMax">
                    19° {""}
                </span>
                <span className = "WeatherForecast-temperatureDivider">
                |
                </span>
                <span className = "WeatherForecast-temperatureMin">
                {""} 10°
                </span>
            </div>
        </div>

    </div>
)
}