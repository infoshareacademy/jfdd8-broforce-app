import React, {Component} from 'react'
import firebase from 'firebase'

class SignUpScreen extends Component {

  state = {
    username: '',
    password: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password
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
            nazwa użytkownika
            <input
              onChange={this.handleChange}
              name="username"
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
          <div>
            <button

            >
              Zarejestruj się
            </button>
          </div>

        </form>
      </div>
    )
  }
}

export default SignUpScreen