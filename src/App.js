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
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
