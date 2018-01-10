import React, { Component } from 'react'
import firebase from 'firebase'
import StartScreen from './StartScreen'

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
            <StartScreen/>
          </div>
        )
    )
  }
}

export default Auth