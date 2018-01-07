import React, {Component} from 'react';
import firebase from 'firebase';
import {Link} from "react-router-dom";

class SignInForm extends Component {

  state = {
    email: '',
    password: ''
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
            <button>Feed me!!!</button>
          </div>

          <div>
            <Link to="/signup">
              <button>
                Zarejestruj się
              </button>
            </Link>
          </div>

        </form>
      </div>
    )
  }
}

export default SignInForm