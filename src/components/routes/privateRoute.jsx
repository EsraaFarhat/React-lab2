import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ path, component }) => {

  if (localStorage.username)
    return <Route path={path} component={component} />;
  return <Redirect to="/login" />;
};

export default PrivateRoute;