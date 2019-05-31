import React from 'react';

import firebase from '../../apis/firebase';

import { fetchUser } from '../../actions';
import { connect } from 'react-redux';

import { isBrowser, isMobile, isTablet } from 'react-device-detect';

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

  text() {
    if(isTablet) {
      return <p>利用するにはGoogleでサインインしてください</p>;
    }

    else if(isMobile) {
      return <p>利用するにはGoogleで<br />サインインしてください</p>;
    }

    return (
      <p>利用するにはGoogleでサインインしてください</p>
    );
  }

  render() {
    return (
      <GoogleLoginContainer>
        <div style={{ marginBottom: '3rem', fontWeight: 'bold' }}>
          {this.text()}
        </div>
        <GoogleLoginButton 
          isBrowser={isBrowser} 
          isMobile={isMobile} 
          isTablet={isTablet}
          className="ui raise segment"
          onClick={this.signInWithGoogle}
        >
          <div style={{ width: '24%' }}>
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