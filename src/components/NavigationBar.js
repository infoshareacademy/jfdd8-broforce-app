import React, { Component } from 'react'
import logo from '../logo1.svg';
import  {
 Navbar
} from 'react-bootstrap';
import LogOut from "./LogOut";
import './App.css';



class NavigationBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <img src={logo} className="App-logo" alt="logo1" />
          </Navbar.Brand>
        </Navbar.Header>
        <LogOut/>
      </Navbar>
    )
  }
}

export default NavigationBar