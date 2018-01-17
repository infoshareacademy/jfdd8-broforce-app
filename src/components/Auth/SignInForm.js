import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../state/auth';
import '../App.css';
import SignInWithGoogle from "./SignInWithGoogle";

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
        <h1>Zaloguj się</h1>
        { this.state.error && <p style={{ color: 'red' }}>{ this.state.error.message }</p>}
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
          </div>

          <button className="login-button">Zaloguj się</button>
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