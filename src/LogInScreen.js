import React, {Component} from 'react'
import firebase from 'firebase'

class LogInScreen extends Component {

  state = {
    username: '',
    password: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    )
  };

  render() {
    return (
      <div>
        <h1>Zaloguj się</h1>
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
            <button>Feed me!!!</button>
          </div>

          <div>
            <button
              onClick={this.handleRegistrate}
            >
              Zarejestruj się
            </button>
          </div>

        </form>
      </div>
    )
  }
}

export default LogInScreen