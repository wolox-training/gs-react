import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (localStorage.getItem('tokenId') ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  location: PropTypes.shape({})
};

export default PrivateRoute;
