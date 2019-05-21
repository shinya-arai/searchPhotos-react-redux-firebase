import React from 'react';
import firebase from '../../firebase';

class GoogleLogin extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  logout() {
    firebase.auth().signOut()
  }

  render() {
    return (
      <div>
        <p>
          UID: { this.state.user && this.state.user.id }
        </p>

        {this.state.user ? (
          <button onClick={this.logout}>Google Logout</button>
        ) : (
          <button onClick={this.login}>Google Login</button>
        )}
      </div>
    );
  }
}

export default GoogleLogin;