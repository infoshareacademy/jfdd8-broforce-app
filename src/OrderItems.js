import React, { Component } from 'react'
import firebase from 'firebase'

class OrderItems extends Component {

  componentDidMount() {
    const userUid = firebase.auth().currentUser.uid;

    firebase.database().ref('/orders/' + userUid).on(
      'value',
      snapshot => {
        const snapshotValue = snapshot.val();
        const foodItem = Object.entries(snapshotValue || {}).map(
          ([id]) => ({ id})
        );

      }
    )
  }

  render() {
    return(
      <div>
        <ul>
          {


          }
        </ul>
      </div>
    )
  }
}
export default OrderItems