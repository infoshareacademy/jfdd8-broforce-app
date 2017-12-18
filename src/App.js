import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodItem from './FoodItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Szamello</h1>
        </header>
          <a href="./FoodScreen.js">Gar-kuchnia</a>
          <FoodItem/>
      </div>
    );
  }
}

export default App;
