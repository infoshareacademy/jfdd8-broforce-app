import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'antd/dist/antd.css'
import './index.css';
import App from './App';
import PersonItem from './PersonItem';
import FoodItem from './FoodItem';
import registerServiceWorker from './registerServiceWorker';
import OrderScreen from "./OrderScreen";

ReactDOM.render(
  <Router>
    <div>

      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/personscreen" component={PersonItem}/>
        <Route path="/orderscreen" component={OrderScreen} />
        <PersonItem/>
        <Route path="/FoodItem" component={FoodItem}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
