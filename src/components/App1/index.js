import {Fragment} from 'react';
import './app.scss';
import PropTypes from 'prop-types';

const App = ({ children }) => {
  return (
    <Fragment>
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
