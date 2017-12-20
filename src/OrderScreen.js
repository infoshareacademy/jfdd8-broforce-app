import React, { Component } from 'react';
import NavigationBar from "./NavigationBar";

import ButtonNavigation from "./ButtonNavigation";

class OrderScreen extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>,
        <ButtonNavigation>Węgorz</ButtonNavigation>
      </div>

    )
  }
}
export default OrderScreen