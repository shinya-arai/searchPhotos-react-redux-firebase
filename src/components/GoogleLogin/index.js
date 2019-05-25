import React from 'react';
import firebase from '../../firebase';
// import history from '../../history';
import { fetchUser } from '../../actions';

import { connect } from 'react-redux';

import { Icon } from 'react-icons-kit'
import { google } from 'react-icons-kit/icomoon/google'

import { GoogleLoginContainer, GoogleLoginButton } from '../../styled/GoogleLogin';

class GoogleLogin extends React.Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  signOutFromGoogle() {
    firebase.auth().signOut()
  }

  render() {
    return (
      <GoogleLoginContainer>
        <div style={{ marginBottom: '3rem', fontWeight: 'bold' }}>
          利用するにはGoogleでサインインしてください
        </div>
        <GoogleLoginButton className="ui raise segment">
          <div style={{ width: '16%' }}>
            <Icon size={20} icon={google} />
          </div>
          Sign In With Google
        </GoogleLoginButton>
      </GoogleLoginContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { fetchUser })(GoogleLogin);