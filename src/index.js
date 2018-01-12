import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';

import FoodScreen from './components/OrderScreen/FoodScreen';
import Summary from './components/OrderScreen/Summary';
import OrderScreen from "./components/OrderScreen/OrderScreen";
import Auth from "./components/Auth";
import registerServiceWorker from './registerServiceWorker';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
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
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
