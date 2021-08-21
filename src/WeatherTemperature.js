import React, { useState } from "react";

export default function WeatherTemperature(props){

    const [unit, setUnit] = useState("celsius");

    function ShowFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit(){
        return (props.celsius*9) / 5 +32;
    }

    function fahrenheitTempMax(){
        return (props.tempMax*9) / 5 +32;
    }

    function fahrenheitTempMin(){
        return (props.tempMin*9) / 5 +32;
    }

    function fahrenheitFeelsLike(){
        return (props.feelsLike*9) / 5 +32;
    }

    if (unit === "celsius"){
        return(
            <div className = "temperature">
                <span className="currentTemperature">
                {Math.round(props.celsius)}
                </span>
                <span className="tempMeasurements">
                    ° C {""}
                    <span className="divider">
                        |
                    </span> {""}
                    <a href="/" onClick = {ShowFahrenheit} className="showFahrenheitLink"> 
                    F
                    </a>
                </span>

                <div className="highAndLowTemp">
                <span className = "highTemp">
                    {props.tempMin}° | {""}
                </span>
                <span className = "lowTemp">
                    <strong>
                    {props.tempMax}
                    </strong>
                    °
                </span>
                </div>

                <div className = "feelsLike">
                feels like: {""}
                {Math.round(props.feelsLike)}°
                </div>
            </div>
            );
    }else{
        return(
            <div className = "weatherTemperature">
            <span className="currentTemperature">
            {Math.round(fahrenheit())}
            </span>
            <span className="tempMeasurements">
                ° {""}
                <a href="/" onClick = {showCelsius} className = "showCelsiusLink"> 
                 C {""}
                </a>
                {""} 
                <span className="divider">
                        |
                    </span> {""}
                F
            </span>

            <div className="highAndLowTemp">
                <span className = "highTemp">
                    {Math.round(fahrenheitTempMin())}° | {""}
                </span>
                <span className = "lowTemp">
                    <strong>
                    {Math.round(fahrenheitTempMax())}
                    </strong>
                    °
                </span>
                </div>

                <div className = "feelsLike">
                feels like: {""}
                {Math.round(fahrenheitFeelsLike())}°
                </div>
        </div>
        );
    }
    }

