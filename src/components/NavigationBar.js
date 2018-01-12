import React, { Component } from 'react'
import logo from '../img/logo1.svg';
import  {
 Navbar
} from 'react-bootstrap';
import {
Link
} from 'react-router-dom';
import LogOut from "./LogOut";
import { connect } from 'react-redux';



class NavigationBar extends Component {
  render() {
    return (
      <Navbar className="fixedBottom">
        <Navbar.Header>
          <Navbar.Brand pullLeft>
            <Link to="/"><img src={logo} className="App-logo" alt="logo1" /></Link>
          </Navbar.Brand>
          {/*<Navbar.Toggle />*/}
        {/*<Navbar.Collapse>*/}
          <Navbar.Text>
            Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
          </Navbar.Text>
          <Navbar.Text pullRight>
            <LogOut/>
          </Navbar.Text>
        {/*</Navbar.Collapse>*/}
        </Navbar.Header>
      </Navbar>
    )
  }
}

export default connect(
  state => ({user: state.auth.user}
))(NavigationBar)