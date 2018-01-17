import React, {Component} from 'react';
import NavigationBar from "../NavigationBar";
import ButtonNavigation from "../ButtonNavigation";
import OrderItems from "./OrderItems";

class OrderScreen extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <ButtonNavigation/>
        <OrderItems/>

      </div>

    )
  }
}

export default OrderScreen