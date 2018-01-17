import React, { Component } from 'react'
import logo from '../img/logo1.svg';
import  {
 Navbar
} from 'react-bootstrap';
import LogOut from "./LogOut";
import './App.css';
import { connect } from 'react-redux';



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

export default connect(
  state => ({user: state.auth.user}
))(NavigationBar)