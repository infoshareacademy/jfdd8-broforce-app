import React, {Component} from 'react';
import firebase from 'firebase';
import './App.css';

const errorMessages = {
    'auth/email-already-in-use': 'No już mamy takie konto',
  'auth/user-not-found': 'Nie ma użytkownika',


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

    firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    ).then(
      user => this.props.history.push('/')
    ).catch(
      error => this.setState({ error })
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

            <button className="login-button login-b">Zaloguj się</button>

            <button className="login-button g-button">Google+</button>

        </form>
      </div>
    )
  }
}

export default SignInForm