import React from "react";
import { ReactSkycon } from 'react-skycons-extended' ;

export default function WeatherIcon(props){
    const codeMapping = {
        "01d" : "CLEAR_DAY",
        "01n" : "CLEAR_NIGHT",
        "02d" : "PARTLY_CLOUDY_DAY",
        "02n" : "PARTLY_CLOUDY_NIGHT",
        "03d" : "PARTLY_CLOUDY_DAY",
        "03n" : "PARTLY_CLOUDY_NIGHT",
        "04d" : "PARTLY_CLOUDY_DAY",
        "04n" : "PARTLY_CLOUDY_NIGHT",
        "09d" : "SHOWERS_DAY",
        "09n" : "SHOWERS_NIGHT",
        "10d" : "SHOWERS_DAY",
        "10n" : "SHOWERS_NIGHT",
        "11d" : "THUNDER",
        "11n" : "THUNDER",
        "13d" : "SNOW_SHOWERS_DAY",
        "13n" : "SNOW_SHOWERS_NIGHT",
        "50d" : "FOG",
        "50n" : "FOG"
    }

    return(
        <div>
        <ReactSkycon
          icon= {codeMapping[props.code]}
          color={{
            cloud: "#d3d3d3",
            dark_cloud: "#bcb8b8",
            fog:"#bcb8b8",
            light_cloud: "#d3d3d3",
            moon: "#151515",
            rain: "#6adef8",
            snow: "#d3d3d3",
            sun: "#ffd27f",
            thunder: "#FFD27F"
          }}
          size={120}
          animate={true}
        />
      </div>
        );
}
