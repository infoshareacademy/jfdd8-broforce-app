import React, {Component} from 'react';
import szamello from './burger-boysmall.png';
import "./StartScreen.css";
import SignInButton from './SingInButton';
import {Link} from "react-router-dom";


class StartScreen extends Component {



  render(){
    return(

      <div>
        <h1 className="app-name">szamello</h1>
        <div className="monster">
          <img src={szamello} alt="szamello-monster"/>;
        </div>
        <SignInButton/>
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
