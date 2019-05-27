import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

import './styles/index.scss';

import history from './history';
import firebase from './firebase';

import Loading from './components/Loading';
import MainPage from './components/MainPage';
import GoogleLogin from './components/GoogleLogin';
import NotFoundPage from './components/Error';

class App extends React.Component {
  state = { 
    loading: true, 
    authenticated: false, 
    user: null,
  };

  async componentWillMount() {
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          user,
          loading: false
        });
      }
    });
  }

  render() {
    const { authenticated, loading } = this.state;
    
    if (loading) {
      return (
        <Loading />
      );
    }

    return (
      <Switch>
        <Route path="/" exact render={() => authenticated ? <MainPage /> : <Redirect to='/login' />} />
        <Route path="/login" render={() => authenticated ? <Redirect to='/' /> : <GoogleLogin />} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
};

export const createApp = () => {
  return (
    <Router history={history}>
      <Grommet theme={grommet} full>
        <App />
      </Grommet>
    </Router>
  );
};