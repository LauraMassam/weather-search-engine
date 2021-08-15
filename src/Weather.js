import React, {useState} from "react";
import axios from "axios";
import "./Weather.css"; 
import { mixedTypeAnnotation } from "@babel/types";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState ({ready : false});
    function handleResponse (response) {
        console.log(response.data);
        setWeatherData ({
            ready : true,
            city: response.data.name,
            date: "Saturday 15:38",
            description: response.data.weather[0].description,
            feelsLike: Math.round(response.data.main.feels_like),
            humidity: Math.round(response.data.main.humidity),
            iconUrl: "https://openweathermap.org/img/wn/02d@2x.png",
            temperature: Math.round(response.data.main.temp),
            sunrise: response.data.sys.sunrise,
            sunset: response.data.sys.sunset,
            tempMax: Math.round(response.data.main.temp_max),
            tempMin: Math.round(response.data.main.temp_min),
            wind: Math.round(response.data.wind.speed),
    });
    }
    if (weatherData.ready) {
    return(
<div>
    <div className="row search-form">
    <form>
        <input type = "text" placeholder ="Enter a City..."></input>
        <input type = "submit" placeholder ="Search"></input>
    </form>
    </div>

    <h6>
        Here's the weather in...
    </h6>
    <div className="row">
        <div className="col-8">
            <h1 className = "text-capitalize">
                 {weatherData.city}
            </h1>
        </div>
        <div className="col-4">
            <h3>
                 {weatherData.date}
            </h3>
        </div>

        <div className="row">
            <div className="col-6">
                <img src = {weatherData.iconUrl}
                     alt = {weatherData.description}
                     style = {{width: 150}}
                />
            </div>
            <div className="col-6 temperature">
                <span className = "current-temperature">
                    {weatherData.temperature}
                </span>
                <span className = "temp-measurements">
                    °C | F 
                </span>             
                
                    <div className = "high-low-temp">
                        {weatherData.tempMin}° | {""}
                        <strong>
                        {weatherData.tempMax}
                        </strong>
                        °
                    </div>
                    <div className = "feels-like">

                    feels like : {weatherData.feelsLike}
                    </div>
            </div>

            <div className="row weather-details">
                <div className="col">
                        humidity: {weatherData.humidity}%
                </div>
                <div className="col">
                        Wind: {weatherData.wind}km/h
                </div>
                <div className="col">
                        sunrise: {weatherData.sunrise}
                </div>
                <div className="col">
                sunset: {weatherData.sunset}
                </div>
            </div>

        </div>
    </div>
</div>
      );
      
} else {
    const apiKey ="9aaa9a2a183bbe9e6cb58bc031908f93";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading..."
}
}