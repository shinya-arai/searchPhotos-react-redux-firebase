import React from 'react';
import firebase from '../../firebase';
import history from '../../history';

import { connect } from 'react-redux';
import { login, logout } from '../../actions';

class GoogleLogin extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })

    if(this.state.user) {
      history.push('/');
    }
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  logout() {
    firebase.auth().signOut()
  }

  reduxLogin = () => {
    const { login, history } = this.props;

    login();
    history.push('/');
  }

  render() {
    return (
      <>
        <div>
          {this.state.user && (
            <p>{this.state.user.displayName}</p>
          )}

          {this.state.user ? (
            <button onClick={this.logout}>Google Logout</button>
          ) : (
            <button onClick={this.login}>Google Login</button>
          )}
        </div>

        <div>
          <button onClick={this.reduxLogin}>login redux</button>
          <button onClick={this.props.logout}>logout redux</button>
          {this.props.user ? <div>login!!</div> : <div>logout!!</div>}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { login, logout })(GoogleLogin);