import React, { Component } from 'react'
import firebase from 'firebase'
import { Switch, Route } from 'react-router-dom'
import StartScreen from './StartScreen'
import SignUpScreen from "./SignUpScreen";

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
          <Switch>
            <Route path="/signup" component={SignUpScreen}/>
            <Route component={StartScreen}/>
          </Switch>
        )
    )
  }
}

export default Auth