import React, { Component } from 'react';
import '../App.css';
import { signInGoogle} from "../../state/auth";
import { connect } from 'react-redux';

class SignInWithGoogle extends Component {

  render(){
    return(
      <button type="button"
        className="login-button g-button"
        onClick={this.props.signInGoogle}
      >Google+</button>
    )
  }
}

export default connect (
  state => ({
    user: state.auth.user
  }),
  { signInGoogle }
)(SignInWithGoogle)