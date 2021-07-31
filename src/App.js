import React from "react";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <form>
        <input type = "text" placeholder ="Enter a City..."></input>
        <input type = "submit" placeholder ="Search"></input>
      </form>
      </div>
      <footer>
        open-sourced code by <a href ="https://github.com/LauraMassam/weather-search-engine" target="_blank" rel="noreferrer">
          Laura Massam
          </a>
      </footer>
    </div>
  );
}

