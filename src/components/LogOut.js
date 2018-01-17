import React, {Component} from 'react';
import firebase from 'firebase'
import './App.css';
import logo from '../logo1.svg';

class LogOut extends Component {
  render() {
    return (


        <div className="username">
            <img src={logo} className="App-logo" alt="logo1" />
        {firebase.auth().currentUser.email}
        <button className="login-button"
          onClick={() => firebase.auth().signOut()}
        >
          Wyloguj
        </button>

      </div>
  );
  }
}

export default LogOut

