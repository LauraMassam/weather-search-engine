import React from "react";
import "./Weather.css"; 

export default function Weather(){
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
            <h1>
                 London
            </h1>
        </div>
        <div className="col-4">
            <h3>
                 Saturday
                 15:38
            </h3>
        </div>

        <div className="row">
            <div className="col-6">
                <img src = "https://openweathermap.org/img/wn/02d@2x.png"
                     alt = "weather"
                     style = {{width: 150}}
                />
                <div className="row humidity-wind">
                    humidity: 72%
                    Wind: 3km/h
                </div>
                
            </div>
            <div className="col-6 temperature">
                <ul>
                <li>
                    <span className = "current-temperature">17</span> 
                    <span className = "temp-measurements">°C | F </span> 
                </li>
                <li className = "high-low-temp">16° | <strong>19</strong>°</li>
                <li>feels like</li>
                <li>
                <div className="row sunrise-sunset">
                    <div className="col"> sunrise: 06:00 </div>
                    <div className="col">sunset: 21:48</div>
                </div>
                </li>
                </ul>
            </div>
        </div>
    </div>
</div>
      )
}