import React, {Component} from 'react';
import firebase from 'firebase';
import '../App.css';

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
    ).then(
      user => this.props.history.push('/')
    )
  };

  render() {
    return (
      <div className="wrapper sign-in">
        <h1>Zaloguj się</h1>
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

            <button className="login-button g-button">Google+</button>

        </form>
      </div>
    )
  }
}

export default SignInForm