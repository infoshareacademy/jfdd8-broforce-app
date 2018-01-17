import React, {Component} from 'react'
import {Icon} from 'antd'


import { Link } from 'react-router-dom'

class ButtonNavigation extends Component {

  render() {
    return (
      <div>
        <Link to={'/'} className="login-button">
          <Icon type="left"/>Menu
        </Link>
      </div>
    )
  }
}
export default ButtonNavigation

