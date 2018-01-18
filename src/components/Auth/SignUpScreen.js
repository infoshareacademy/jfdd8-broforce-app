import React, {Component} from 'react';
import SignUpForm from "./SignUpForm";
import '../App.css';

class SignUpScreen extends Component {
  render(){
    return(
      <SignUpForm history={this.props.history}/>
    );
  }
}

export default SignUpScreen
