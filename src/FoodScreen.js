import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodItem from './FoodItem';

class FoodScreen extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Wybierz żarełko Zią!</h1>
                </header>
                <p className="App-intro">
                    Wybieraj szamkę i lecimy dalej!
                </p>
                <FoodItem/>
            </div>
        );
    }
}

export default FoodScreen;
