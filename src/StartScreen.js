import React, {Component} from 'react';
import szamello from './burger-boysmall.png';
import "./StartScreen.css";
import SignInForm from './SignInForm';
import {Link} from "react-router-dom";


class StartScreen extends Component {

  render() {
    const monster = <img className="monster" src={szamello} alt="szamello-monster"/>;
    return (
      <div>
        <h1 className="app-name">szamello</h1>
        {monster}
        <SignInForm/>
        <p>Nie masz konta?
          <Link to="/signup">
            Załóż
          </Link>
        </p>
      </div>
    );
  }
}

export default StartScreen
