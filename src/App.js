import React from "react";
import "./App.css";
import logo from "./nerd-swag-logo.png";

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} />
      <div class="wrap">
        <a href="https://teespring.com/stores/nerd-swag-life" class="button">
          Shop
        </a>
      </div>
    </div>
  );
}

export default App;
