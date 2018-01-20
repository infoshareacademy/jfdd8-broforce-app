import React, {Component} from 'react';
import FoodItem from './FoodItem';
import LogOut from "../LogOut";
import OrderButtonNavigation from '../OrderButtonNavigation';
import '../App.css';

class FoodScreen extends Component {
  handleClearAll = event => {
    let emptyArray = [];

    this.props.selectedFoodItemIds = emptyArray;
  };

    render() {
        return (
            <div className="menu-wrapper">
                <LogOut/>
                <FoodItem/>
              <button
                className="login-button"
                onClick={this.handleClearAll}
              >clear all</button>
                <OrderButtonNavigation/>
            </div>
        );
    }
}

export default FoodScreen;
