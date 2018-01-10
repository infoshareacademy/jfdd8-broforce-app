import React, {Component} from 'react'
import {Button, Icon} from 'antd'


class OrderButtonNavigation extends Component {

  render() {
    return (
      <div>
        <Button href="./order" type="primary">
          Twoje zamówienie<Icon type="right"/>
        </Button>
      </div>
    )
  }
}
export default OrderButtonNavigation