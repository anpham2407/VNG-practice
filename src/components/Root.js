/* eslint react/jsx-max-props-per-line: 0 */
/* eslint react/jsx-sort-props: 0 */ 
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import App from './App';
import Listing from './../pages/Listing';
import ConfirmPayment from './../pages/ConfirmPayment';

const Root = (props) => {
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Listing} />
          <Route exact path="/confirm" component={ConfirmPayment} />
        </Switch>
      </App>
    </Router>
  );
};

export default Root;