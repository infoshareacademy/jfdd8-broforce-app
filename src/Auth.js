import React, { Component } from 'react'
import firebase from 'firebase'
import LogInScreen from "./SignInForm";
import SignUpScreen from "./SignUpForm";

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
            <LogInScreen/>
            <SignUpScreen/>
          </div>
        )
    )
  }
}

export default Auth