import React, { Component } from 'react'
import firebase from 'firebase'
import foodItems from './foodItems'

class OrderItems extends Component {

  state = {
    orderedFood: []
  };

  componentDidMount() {
    const userUid = firebase.auth().currentUser.uid;


    firebase.database().ref('/orders/' + userUid).on(
      'value',
      snapshot => {
        const snapshotValue = snapshot.val();
        this.setState({
          time: snapshotValue === null ? null : new Date(parseInt(snapshotValue.time)),
          orderedFood: snapshotValue === null ? [] : snapshotValue.selectedFoodItemIds ? snapshotValue.selectedFoodItemIds.split(",") : []
        });
      }
    )
  }

  render() {

    const orderedFoodItems = this.state.orderedFood.map(
      id => foodItems.find(item => item.id === id)
    )
    return(
      <div> Zostało zamówione ({this.state.time && this.state.time.toString()}):
        {
          orderedFoodItems.map(
            item => (
              <p>{item.name} {item.price}</p>
            )
          )
        } Wartość zamówienia :
        {
          orderedFoodItems.reduce((total, next) => total + next.price, 0)
        } PLN
      </div>
    )
  }
}
export default OrderItems