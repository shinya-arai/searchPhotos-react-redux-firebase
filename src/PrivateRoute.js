import React from 'react';

import firebase from './firebase';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({user, component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => 
        firebase.auth.currentUser !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
}

export default PrivateRoute;