import React, {Component} from 'react'
import {Icon} from 'antd'


import { Link } from 'react-router-dom'

class ButtonNavigation extends Component {

  render() {
    return (
      <div>
        <Link to={'/'}>
          <Icon type="left"/>Menu
        </Link>
        <Link to={'/order'}>
          Podsumowanie<Icon type="right"/>
        </Link>
      </div>
    )
  }
}
export default ButtonNavigation

