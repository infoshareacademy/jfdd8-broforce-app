import React, { Component } from 'react';

import NavigationBar from './NavigationBar'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <NavigationBar/>
          <h1 className="App-title">Welcome to Szamello</h1>

        </header>
          <p className="App-intro">
              Siema głodomorze
          </p>
          <a href="./foodscreen">Gar-kuchnia</a>
        <br/>
        <a href="./personscreen">Ludziska</a>
          <br/>
          <a href="./summary">Podsumowanie</a>


      </div>
    );
  }
}

export default App;
