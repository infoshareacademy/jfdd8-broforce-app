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
          orderedFood: snapshotValue.split(",")
        });
      }
    )
  }

  render() {
    const orderedFoodItems = this.state.orderedFood.map(
      id => foodItems.find(item => item.id === id)
    )
    return(
      <div>
        {
          orderedFoodItems.map(
            item => (
              <p>{item.name} {item.price}</p>
            )
          )
        }
        {
          orderedFoodItems.reduce((total, next) => total + next.price, 0)
        }
      </div>
    )
  }
}
export default OrderItems