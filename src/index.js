import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import FoodScreen from './components/FoodScreen';
import Summary from './components/Summary';
import registerServiceWorker from './registerServiceWorker';
import OrderScreen from "./components/OrderScreen";
import Auth from "./components/Auth";
import setupFirebase from './setupFirebase'
import store from './store'

setupFirebase()

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
