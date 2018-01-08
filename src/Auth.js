import React, { Component } from 'react'
import firebase from 'firebase'
import StartScreen from './StartScreen';
import App from "./App";

class Auth extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(
      user => this.setState({ user })
    )
  }

  render() {
    return (
      this.state.user
        ? this.props.children
        : (
          <div>
            <App/>
          </div>
        )
    )
  }
}

export default Auth