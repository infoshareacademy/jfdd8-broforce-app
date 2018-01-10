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
import Auth from "./Auth";


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
      <Auth>
        <Switch>
          <Route exact path="/" component={FoodScreen}/>
          <Route path="/order" component={OrderScreen}/>
          <Route path="/summary" component={Summary}/>
        </Switch>
      </Auth>

    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
