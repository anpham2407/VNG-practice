import {Fragment} from 'react';
import './app.scss';
import Topbar from './../Topbar';
import PropTypes from 'prop-types';

const App = ({ children }) => {
  return (
    <Fragment>
      <Topbar />
      <div className="main">
        {children}
      </div>
    </Fragment>
  );
};

App.propTypes = {
  children: PropTypes.node,
};


export default App;
