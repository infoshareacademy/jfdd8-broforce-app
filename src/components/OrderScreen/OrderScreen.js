import React, {Component} from 'react';
import LogOut from "../LogOut";
import ButtonNavigation from "../ButtonNavigation";
import OrderItems from "./OrderItems";
import '../App.css';

class OrderScreen extends Component {
  render() {
    return (
      <div className="wrapper">
          <LogOut />
<div className="order">
        <OrderItems/>
</div>
          <ButtonNavigation/>

      </div>

    )
  }
}

export default OrderScreen