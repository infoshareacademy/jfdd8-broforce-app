import React, {Component} from 'react';
import FoodItem from './FoodItem';
import LogOut from "../LogOut";
import OrderButtonNavigation from '../OrderButtonNavigation';
import '../App.css';

class FoodScreen extends Component {
    render() {
        return (
            <div className="menu-wrapper">
                <LogOut/>
                <FoodItem/>
                <OrderButtonNavigation/>
            </div>
        );
    }
}

export default FoodScreen;
