import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (localStorage.getItem('tokenId') ? <Redirect to="/home" /> : <Component {...props} />)}
    />
  );
}

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  location: PropTypes.shape({})
};

export default PublicRoute;
