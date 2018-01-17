import React, {Component} from 'react'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import './App.css';


class OrderButtonNavigation extends Component {

  render() {
    return (
      <div>
        <Link to={'/order'} className="login-button">
          Twoje zamówienie<Icon type="right"/>
        </Link>
      </div>
    )
  }
}
export default OrderButtonNavigation