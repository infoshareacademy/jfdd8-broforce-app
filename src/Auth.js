import React, { Component } from 'react'
import firebase from 'firebase'
import SignInScreen from "./SignInScreen";

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
            <SignInScreen/>
          </div>
        )
    )
  }
}

export default Auth