import React, { Component } from 'react'
import logo from './logo1.svg';
import  {
 Navbar
} from 'react-bootstrap';


class NavigationBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <img src={logo} className="App-logo" alt="logo1" />
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
  }
}

export default NavigationBar