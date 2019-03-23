import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import MainPage from './components/MainPage';
// import GoogleLogin from './GoogleLogin';
// import ErrorDisplay from './ErrorDisplay';

const App = () => {
  return (
      <Switch>
        <>
          <Route path="/" exact component={MainPage} />
          {/* <Route path="/login" exact component={GoogleLogin} /> */}
          {/* <Route component={ErrorDisplay} /> */}
        </>
      </Switch>
  );
};

export const createApp = () => {
  return (
    <Router history={history}>
      <App />
    </Router>
  );
};