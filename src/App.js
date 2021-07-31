import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      </div>
      <footer>
        open-sourced code by <a href ="https://github.com/LauraMassam/weather-search-engine" target="_blank" rel="noreferrer">
          Laura Massam
          </a>
      </footer>
    </div>
  );
}



