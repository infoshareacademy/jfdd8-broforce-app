import React from 'react';
import firebase from 'firebase'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'antd/dist/antd.css'
import './index.css';
import FoodScreen from './FoodScreen';
import Summary from './Summary';
import registerServiceWorker from './registerServiceWorker';
import OrderScreen from "./OrderScreen";
import StartScreen from "./StartScreen";
import Auth from "./Auth";
import SignUpScreen from "./SignUpScreen";

const config = {
  apiKey: "AIzaSyA48KznyNkTo7AFbCPWTTFJdRAEntabD-I",
  authDomain: "szamello-app.firebaseapp.com",
  databaseURL: "https://szamello-app.firebaseio.com",
  projectId: "szamello-app",
  storageBucket: "",
  messagingSenderId: "357665956589"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/start" component={StartScreen}/>
        <Route path="/signup" component={SignUpScreen}/>
        <Auth>
          <Route exact path="/" component={FoodScreen}/>
          <Route path="/order" component={OrderScreen}/>
          <Route path="/summary" component={Summary}/>
        </Auth>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
