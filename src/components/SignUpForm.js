import React, {Component} from 'react';
import firebase from 'firebase';
import './App.css';

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
    ).then(
      user => this.props.history.push('/')
    );
  };

  render() {
    return (
      <div className="wrapper">
        <h1 className="suph1">Załóż konto</h1>
        <form
          onSubmit={this.handleSubmit}
        >
          <div>
            <input className="login-input"
              onChange={this.handleChange}
              name="email"
            />
          </div>
          <div>
            <input className="login-input"
              onChange={this.handleChange}
              name="password"
              type="password"
            />
          </div>
          <button className="login-button zaloosh-b">Załóż</button>
        </form>

      </div>
    )
  }
}

export default SignUpForm