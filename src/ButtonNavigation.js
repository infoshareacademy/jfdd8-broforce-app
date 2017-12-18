import React, {Component} from 'react'
import {Button, Icon} from 'antd'


class ButtonNavigation extends Component {

  render() {
    return (
      <div>
        <Button href="/" type="primary">
          <Icon type="left"/>Confirm
        </Button>
        <Button type="primary">
          Continue<Icon type="right"/>
        </Button>
      </div>
    )
  }
}
export default ButtonNavigation

