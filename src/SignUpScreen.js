import React, {Component} from 'react';
import SignUpForm from "./SignUpForm";

class SignUpScreen extends Component {
  render(){
    return(
      <SignUpForm history={this.props.history}/>
    );
  }
}

export default SignUpScreen
