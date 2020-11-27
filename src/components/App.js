/* eslint react/jsx-max-props-per-line: 0 */
/* eslint react/jsx-sort-props: 0 */ 
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Listing from '../pages/Listing';
import ConfirmPayment from '../pages/ConfirmPayment';
import Scroll from '../pages/Scroll';

const App = (props) => {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Listing} />
          <Route exact path="/confirm" component={ConfirmPayment} />
          <Route exact path="/scrollspy" component={Scroll} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;