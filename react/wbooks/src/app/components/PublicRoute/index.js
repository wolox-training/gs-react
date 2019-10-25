import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function PublicRoute({ component: Component, redirect, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('tokenId') ? <Redirect to={redirect} /> : <Component {...props} />
      }
    />
  );
}

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirect: PropTypes.string.isRequired,
  location: PropTypes.shape({})
};

export default PublicRoute;
