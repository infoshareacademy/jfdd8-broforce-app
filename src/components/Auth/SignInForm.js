import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../state/auth';
import '../App.css';
import SignInWithGoogle from "./SignInWithGoogle";

const errorMessages = {
  'auth/email-already-in-use': 'Taki użytkownik już istnieje  :)',
  'auth/user-not-found': 'Niema takiego użytkownika',
  'auth/wrong-password': 'Nieprawidłowe hasło!',
  'auth/invalid-email': 'Adres email niepoprawny, spróbuj ponownie'

};

class SignInForm extends Component {

  state = {
    email: '',
    password: '',
    error: null
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.signIn(
      this.state.email,
      this.state.password
    )
      .catch(
        error => this.setState({error})
      )
      .then(
        user => this.props.history.push('/')
      )
  };

  render() {
    return (
      <div className="wrapper sign-in">

        <form className='login-form'
              onSubmit={this.handleSubmit}
        >
          <div>

            <input className="login-input" placeholder="e-mail"
                   onChange={this.handleChange}
                   name="email"
            />
          </div>
          <div>

            <input className="login-input" placeholder="hasło"

                   onChange={this.handleChange}
                   name="password"
                   type="password"
            />
            {this.state.error && <p style={{ color: 'red' }}>{errorMessages[this.state.error.code] || this.state.error.code}</p>}
          </div>

          <button className="login-button login-b">zaloguj się</button>
          <SignInWithGoogle/>
        </form>
      </div>
    )
  }
}

export default connect (
  state => ({
    user: state.auth.user
  }),
  { signIn }
)(SignInForm)