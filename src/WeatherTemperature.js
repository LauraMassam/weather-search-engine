import React from "react";

export default function WeatherTemperature(props){

        return(
            <div className = "temperature">
                <span className="currentTemperature">
                {Math.round(props.celsius)}
                </span>
                <span className="tempMeasurements">
                    °C {""}
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
    }

