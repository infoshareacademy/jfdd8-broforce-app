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
import App from './App';
import PersonScreen from './PersonScreen';
import FoodScreen from './FoodScreen';
import Summary from './Summary';
import registerServiceWorker from './registerServiceWorker';
import OrderScreen from "./OrderScreen";
import LogInScreen from "./LogInScreen";
import SignUpScreen from "./SignUpScreen";
import Auth from "./Auth";
import LogOut from "./LogOut";

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
        <Auth>
          <Route exact path="/" component={App}/>
          <Route path="/logout" component={LogOut}/>
          <Route path="/loginscreen" component={LogInScreen}/>
          <Route path="/personscreen" component={PersonScreen}/>
          <Route path="/orderscreen" component={OrderScreen}/>
          <Route path="/foodscreen" component={FoodScreen}/>
          <Route path="/summary" component={Summary}/>
        </Auth>
        <Route path="/signupscreen" component={SignUpScreen}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
