import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Switch, Route, withRouter } from 'react-router-dom';
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

export default compose(
  withRouter,
  connect(
  state => ({
    user: state.auth.user
  })
))(Auth)