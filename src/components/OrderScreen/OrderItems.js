import React, { Component } from 'react'
import firebase from 'firebase'
import moment from 'moment'
import 'moment/locale/pl';
import foodItems from './foodItems'
import { connect } from 'react-redux'
import '../App.css';

moment.locale('pl');

class OrderItems extends Component {

  state = {
    orderedFood: []
  };

  componentDidMount() {
    const userUid = this.props.user.uid;

    setInterval(
      () => this.forceUpdate(), 1000
    );

    firebase.database().ref('/orders/' + userUid).on(
      'value',
      snapshot => {
        const snapshotValue = snapshot.val();
        this.setState({
          time: snapshotValue === null ? null : new Date(parseInt(snapshotValue.time, 10)),
          orderedFood: snapshotValue === null ? [] : snapshotValue.selectedFoodItemIds ? snapshotValue.selectedFoodItemIds.split(",") : []
        });
      }
    )
  }

  render() {

    const orderedFoodItems = this.state.orderedFood.map(
      id => foodItems.find(item => item.id === id)
    );
    return(
      <div className="wrapper"> Zamowienie odbierz {moment(this.state.time).add(15, 'minutes').fromNow()}
      <p>Twoje zamówienie:</p>

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
export default connect(state => ({ user: state.auth.user }))(OrderItems)