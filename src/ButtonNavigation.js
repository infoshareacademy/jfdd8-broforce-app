import React, {Component} from 'react'
import {Button, Icon} from 'antd'


class ButtonNavigation extends Component {

  render() {
    return (
      <div>
        <Button href="./" type="primary">
          <Icon type="left"/>Menu
        </Button>
        <Button href="./summary" type="primary">
          Podsumowanie<Icon type="right"/>
        </Button>
      </div>
    )
  }
}
export default ButtonNavigation

