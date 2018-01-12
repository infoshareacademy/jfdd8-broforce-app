import React, {Component} from 'react';

import NavigationBar from '../NavigationBar'
import Timer from './Timer'
import '../App.css';

class Summary extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavigationBar/>
          <h1 className="App-title">Podsumowanie Twojego zamówienia</h1>
        </header>
        <div className="App-intro">
          <p><strong>Twoja szama będzie za :</strong></p>
          <Timer/>
          <p><strong>Przygotuj hajs: 1589zł</strong></p>

        </div>
        <a href="../">Menu</a>

      </div>
    );
  }
}

export default Summary;
