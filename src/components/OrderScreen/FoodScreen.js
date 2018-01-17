import React, {Component} from 'react';
import FoodItem from './FoodItem';
import LogOut from "../LogOut";
import OrderButtonNavigation from '../OrderButtonNavigation';

class FoodScreen extends Component {
    render() {
        return (
            <div className="App">
                <LogOut/>
                <header className="App-header">
                    <h1 className="App-title">Wybierz szamę</h1>
                </header>
                <FoodItem/>
                <OrderButtonNavigation/>
            </div>
        );
    }
}

export default FoodScreen;
