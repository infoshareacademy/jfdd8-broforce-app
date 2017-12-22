import React, {Component} from 'react'
import firebase from 'firebase'

class SignUpScreen extends Component {

  state = {
    email: '',
    password: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    )
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
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