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

    this.interval = setInterval(
      () => this.forceUpdate(), 1000
    );
    this.path = 'orders/' + userUid;
    this.listener = firebase.database().ref('/orders/' + userUid).on(
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

  componentWillUnmount() {
    clearInterval(this.interval);
    firebase.database().ref(this.path).off('value', this.listener)
  };

  render() {

    const orderedFoodItems = this.state.orderedFood.map(
      id => foodItems.find(item => item.id === id)
    );
    return (
      <div className="wrapper"> Szama będzie {moment(this.state.time).add(15, 'minutes').fromNow()}
        <p>Zamówiłeś:</p>

        {
          orderedFoodItems.map(
            item => (
              <p
              key={item.id.toString()}
              >{item.name} {item.price}</p>
            )
          )
        } Przygotuj:
        {
          orderedFoodItems.reduce((total, next) => total + next.price, 0)
        } PLN
      </div>
    )
  }
}

export default connect(state => ({user: state.auth.user}))(OrderItems)