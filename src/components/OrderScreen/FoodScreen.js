import React, {Component} from 'react';
import FoodItem from './FoodItem';
import LogOut from "../LogOut";
import OrderButtonNavigation from '../OrderButtonNavigation';
import '../App.css';
import { connect } from 'react-redux';

class FoodScreen extends Component {
  handleClearAll = event => {
    this.props.selectedFoodItemIds = null;
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

export default connect(
  state => ({
    user: state.auth.user
  })
)(FoodScreen);
