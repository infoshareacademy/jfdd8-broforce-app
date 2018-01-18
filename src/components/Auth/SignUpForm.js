import React, {Component} from 'react';
import { signUp } from "../../state/auth";
import { connect } from "react-redux";
import '../App.css';
import logo from '../../img/logo1.svg';

const errorMessages = {
  'auth/email-already-in-use': 'Taki użytkownik już istnieje :)',
  'auth/weak-password': 'Zbyt słabe hasło',
  'auth/invalid-email': 'adres email niepoprawny spróbuj ponownie'
};


class SignUpForm extends Component {

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
    const { email, password, ...other } = this.state;
    event.preventDefault();

    this.props.signUp(
      email,
      password,
      other
    ).then(
      user => this.props.history.push('/')
    ).catch(
      error => this.setState({ error })
    )
  };

  render() {
    return (
      <div className="sign-up wrapper">
        <img src={logo} className="signup-logo" alt="logo1"/>

        <h1>Zarejestruj się</h1>
        <form
          onSubmit={this.handleSubmit}
        >
          <div>

            <input className="login-input"
              onChange={this.handleChange}
              name="email"
                   placeholder="e-mail"
            />
          </div>
          <div>

            <input className="login-input"
              onChange={this.handleChange}
              name="password"
              type="password"
                   placeholder="hasło"
            />
          </div>
          {this.state.error && <p style={{ color: 'red' }}>{errorMessages[this.state.error.code] || this.state.error.code}</p>}
          <button className="login-button">Rejestruję</button>

        </form>

        <a href="./">wróc</a>

      </div>
    )
  }
}

export default connect(
  null,
  { signUp }
)(SignUpForm)