import React, { Component } from 'react';

import NavigationBar from './NavigationBar'
import Timer from './Timer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <NavigationBar/>
          <h1 className="App-title">Welcome to Szamello</h1>

        </header>
          <a href="./FoodScreen.js">Gar-kuchnia</a>
          <p className="App-intro">
              <p><strong>Twoja szama będzie za :</strong> </p>
              <Timer/>

          </p>
      </div>
    );
  }
}

export default App;
