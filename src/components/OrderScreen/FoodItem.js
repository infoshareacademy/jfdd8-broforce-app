import React from 'react'
import {Button} from 'antd';
import '../index.css';
import firebase from 'firebase'
import './App.css';
import { connect } from 'react-redux'

import foodItems from './foodItems'

class FoodItem extends React.Component {

  state = {
    selectedFoodItemIds: []
  }

  handleChange = event => {

    const foodItemId = event.target.dataset.foodItemId

    const foodIsChecked = this.state.selectedFoodItemIds.find(
      item => item === foodItemId
    ) !== undefined;

    const checkedFoodId = this.state.selectedFoodItemIds.filter(
      item => item !== foodItemId
    );

    this.setState({
      selectedFoodItemIds: foodIsChecked ? checkedFoodId : this.state.selectedFoodItemIds.concat(foodItemId)
    })
  };

  handleOrder = event => {
    const userUid = firebase.auth().currentUser.uid
    firebase.database().ref('/orders/' + userUid).set({
      selectedFoodItemIds: this.state.selectedFoodItemIds.toString(),
      time: Date.now().toString()
    })
  }

  componentDidMount() {
    const userUid = this.props.user.uid;


    firebase.database().ref('/orders/' + userUid).on(
      'value',
      snapshot => {
        const snapshotValue = snapshot.val();
        this.setState({
          selectedFoodItemIds: snapshotValue === null ? [] : snapshotValue.selectedFoodItemIds ? snapshotValue.selectedFoodItemIds.split(",") : []
        });
      }
    )
  }


  render() {

    return (
      <div className="menu">
        {
          foodItems.map(
            foodItem => (
              <label className="container-czek">
                <input
                  type="checkbox"
                  onChange={this.handleChange}
                  checked={this.state.selectedFoodItemIds.includes(foodItem.id)}
                  data-food-item-id={foodItem.id}
                />
                  <span class="checkmark"></span>
                {foodItem.name} - {foodItem.price} PLN

              </label>
            )
          )
        }
        <button className="login-button" onClick={this.handleOrder}>Zamów</button>
      </div>
    )
  }
}


export default connect(
  state => ({
    user: state.auth.user
  })
)(FoodItem);