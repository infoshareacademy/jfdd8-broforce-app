import React, { Component } from 'react';

import NavigationBar from './NavigationBar'
import Timer from './Timer'
import './App.css';

class Summary extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <NavigationBar/>
                    <h1 className="App-title">Podsumowanie Twojego zamówienia</h1>

                </header>
                <p className="App-intro">
                    <p><strong>Twoja szama będzie za :</strong> </p>
                    <Timer/>

                </p>
                <a href="./foodscreen">Gar-kuchnia</a>
                <br/>
                <a href="./personscreen">Ludziska</a>


            </div>
        );
    }
}

export default Summary;
