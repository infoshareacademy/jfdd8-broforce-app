import React from 'react'
import {Button} from 'antd';
import './index.css';
import firebase from 'firebase'

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
    firebase.database().ref('/orders/' + userUid).set(this.state.selectedFoodItemIds.toString())
  }

  render() {

    return (
      <div className="menu">
        {
          foodItems.map(
            foodItem => (
              <p>
                <input type="checkbox"
                       onChange={this.handleChange} data-food-item-id={foodItem.id}
                />
                {foodItem.name} - {foodItem.price} PLN
              </p>
            )
          )
        }
        <button onClick={this.handleOrder}>Order</button>
      </div>
    )
  }
}


export default FoodItem;