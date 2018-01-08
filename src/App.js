import React, { Component } from 'react';

import NavigationBar from './NavigationBar'
import './App.css';
import LogOut from './LogOut'


class App extends Component {
  render() {
    return (
      <div className="App">
        <LogOut/>
        <header className="App-header">

          <NavigationBar/>
          <h1 className="App-title">Welcome to Szamello</h1>

        </header>
          <p className="App-intro">
              Siema głodomorze
          </p>
          <a href="./foodscreen">Gar-kuchnia</a>
          <br/>
        <br/>
          <a href="./summary">Podsumowanie</a>


      </div>
    );
  }
}

export default App;
