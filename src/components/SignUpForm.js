import React, {Component} from 'react';
import firebase from 'firebase';

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
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(
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
      <div>
        <h1>Zarejestruj się</h1>
        <form
          onSubmit={this.handleSubmit}
        >
          <div>
            e-mail
            <input
              onChange={this.handleChange}
              name="email"
            />
          </div>
          <div>
            hasło
            <input
              onChange={this.handleChange}
              name="password"
              type="password"
            />
          </div>
          {this.state.error && <p style={{ color: 'red' }}>{errorMessages[this.state.error.code] || this.state.error.code}</p>}
          <button>Rejestruję</button>

        </form>

        <a href="./">wróc</a>

      </div>
    )
  }
}

export default SignUpForm