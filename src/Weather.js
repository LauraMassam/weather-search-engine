import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css"; 

export default function Weather(props){
    const [weatherData, setWeatherData] = useState ({ready : false});
    const [city, setCity] = useState (props.defaultCity);
    
    function handleResponse (response) {
        setWeatherData ({
            ready : true,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            feelsLike: Math.round(response.data.main.feels_like),
            humidity: Math.round(response.data.main.humidity),
            iconUrl: "https://openweathermap.org/img/wn/02d@2x.png",
            temperature: Math.round(response.data.main.temp),
            sunrise: new Date (response.data.sys.sunrise * 1000),
            sunset: new Date (response.data.sys.sunset * 1000),
            tempMax: Math.round(response.data.main.temp_max),
            tempMin: Math.round(response.data.main.temp_min),
            wind: Math.round(response.data.wind.speed),
    });
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleCityChange(event){
        setCity(event.target.value);
    }

    function search(){
        const apiKey ="9aaa9a2a183bbe9e6cb58bc031908f93";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
    return(
<div>
    <form onSubmit={handleSubmit}>
    <div className="row search-bar">
    <div className = "col-9 search box">
        <input 
        className="form-control"
        type = "text" 
        placeholder ="Enter a City..."
        autoFocus = "on"
        onChange = {handleCityChange}
        />
        </div>

        <div className="col-3 search-btn">
        <input 
        className="btn btn-primary"
        type = "submit" 
        placeholder ="Search"
        />
        </div>
    </div>
    </form>
    <h6>
        Here's the weather in...
    </h6>
    <WeatherInfo data={weatherData} />
</div>
      );
      
} else {
    search();
    return "loading..."
}
}