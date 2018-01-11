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
import FoodScreen from './components/FoodScreen';
import Summary from './components/Summary';
import registerServiceWorker from './registerServiceWorker';
import OrderScreen from "./components/OrderScreen";
import Auth from "./components/Auth";


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
