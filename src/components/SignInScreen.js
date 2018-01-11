import React, {Component} from 'react';
import SignInForm from "./SignInForm";

class SignInScreen extends Component {
  render(){
    return(
      <SignInForm history={this.props.history}/>
    );
  }
}

export default SignInScreen