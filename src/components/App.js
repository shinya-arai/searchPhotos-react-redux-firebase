import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './MainPage';
// import GoogleLogin from './GoogleLogin';
// import ErrorDisplay from './ErrorDisplay';

const App = () => {
  return (
    <Router>
      <Switch>
        <>
          <Route path="/" exact component={MainPage} />
          {/* <Route path="/login" exact component={GoogleLogin} /> */}
          {/* <Route component={ErrorDisplay} /> */}
        </>
      </Switch>
    </Router>
  );
};

export default App;