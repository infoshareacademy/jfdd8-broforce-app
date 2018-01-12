import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import StartScreen from './StartScreen';
import SignUpScreen from "./SignUpScreen";

class Auth extends Component {
  render() {
    return (
      this.props.user
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

export default connect(
  state => ({
    user: state.auth.user
  })
)(Auth)