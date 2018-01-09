import React, {Component} from 'react'
import {Button, Icon} from 'antd'


class ButtonNavigation extends Component {

  render() {
    return (
      <div>
        <Button href="./foodscreen" type="primary">
          <Icon type="left"/>Continue
        </Button>
        <Button href="./summary" type="primary">
          Confirm<Icon type="right"/>
        </Button>
      </div>
    )
  }
}
export default ButtonNavigation

