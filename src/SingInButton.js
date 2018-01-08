import React, {Component} from 'react';
import './SignInButton.css'

class SignInButton extends Component {
  render(){
    return(
      <button className="signinbutton">
        <a href="/signin">Zaloguj się</a>
      </button>
    )
  }
}
export default SignInButton