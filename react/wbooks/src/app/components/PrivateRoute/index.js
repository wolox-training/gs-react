import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ component: Component, redirect, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token_id') ? <Component {...props} /> : <Redirect to={redirect} />
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirect: PropTypes.string.isRequired,
  location: PropTypes.shape({})
};

export default PrivateRoute;
