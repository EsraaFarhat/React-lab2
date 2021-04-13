import React from 'react';
import { Redirect, Route } from 'react-router';

const HiddenRoute = ({ path, component }) => {

  if (!localStorage.username)
    return <Route exact path={path} component={component} />;
  return <Redirect to="/home" />;
};

export default HiddenRoute;