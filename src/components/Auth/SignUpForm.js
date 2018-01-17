import React, {Component} from 'react';
import { signUp } from "../../state/auth";
import { connect } from "react-redux";

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
    const { email, password, ...other } = this.state;
    event.preventDefault();

    this.props.signUp(
      email,
      password,
      other
    ).catch(
      error => this.setState({ error })
    ).then(
      user => this.props.history.push('/')
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
          <button>Rejestruję</button>

        </form>

        <a href="./">wróc</a>

      </div>
    )
  }
}

export default connect(
  null,
  { signUp }
)(SignUpForm)