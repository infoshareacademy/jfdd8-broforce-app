import React, {Component} from 'react';
import FoodItem from './FoodItem';
import NavigationBar from "./NavigationBar";
import {Link} from "react-router-dom";

class FoodScreen extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <header className="App-header">
          <h1 className="App-title">Wybierz szamę</h1>
        </header>
        <Link to="/order">
          <FoodItem/>
        </Link>
      </div>
    );
  }
}

export default FoodScreen;
