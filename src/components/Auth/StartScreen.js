import React, {Component} from 'react';
import szamello from '../../img/burger-boysmall.png';
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
        <SignInForm history={this.props.history}/>
        <div className="zaloosh">
            <p className="inline-b"></p>
            <Link to="/signup" className="inline-b">Nie masz konta? Załóż</Link>
        </div>
      </div>
    );
  }
}

export default StartScreen
