import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './index.css';
import App from './App';
import PersonItem from './PersonItem';
import FoodItem from './FoodItem';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/personscreen" component={PersonItem}/>
        <PersonItem/>
        <Route path="/FoodItem" component={FoodItem}/>
      </Switch>

    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
