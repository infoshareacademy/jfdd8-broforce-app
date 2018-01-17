import React, {Component} from 'react';
import LogOut from "../LogOut";
import ButtonNavigation from "../ButtonNavigation";
import OrderItems from "./OrderItems";

class OrderScreen extends Component {
  render() {
    return (
      <div>
         <LogOut />
        <ButtonNavigation/>
        <OrderItems/>

      </div>

    )
  }
}

export default OrderScreen