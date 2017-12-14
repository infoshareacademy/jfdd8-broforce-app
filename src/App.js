import React, { Component } from 'react';

import './App.css';
import PersonItem from './PersonScreen';

class App extends Component {
  render() {
    return (
      <div className="App">

        <PersonItem/>
      </div>
    );
  }
}

export default App;
