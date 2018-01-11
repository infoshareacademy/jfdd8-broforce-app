import React, {Component} from 'react'
import {Button, Icon} from 'antd'
import { Link } from 'react-router-dom'


class OrderButtonNavigation extends Component {

  render() {
    return (
      <div>
        <Link to={'/order'}>
          Twoje zamówienie<Icon type="right"/>
        </Link>
      </div>
    )
  }
}
export default OrderButtonNavigation