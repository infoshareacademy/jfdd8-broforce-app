import React, {Component} from 'react';
import firebase from 'firebase'

class SignUpForm extends Component {

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
            <h2>Nie masz konta? </h2>
            <button>
              Zarejestruj się
            </button>
          </div>

        </form>

      </div>
    )
  }
}

export default SignUpForm