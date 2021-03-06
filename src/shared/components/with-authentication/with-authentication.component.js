import React from 'react';
import { connect } from 'react-redux';

import { auth } from 'config/firebase';
import { firebase } from 'config/firebase';
import { Logger } from 'shared/utils';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    timer;

    componentDidMount() {
      this.StartLogoutTimeout();

      firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          this.props.onSetAuthUser(authUser);
          this.getToken();
        } else {
          this.props.onSetAuthUser(null);
        }
      });
    }

    StartLogoutTimeout() {
      window.onmousemove = this.resetTimer;
    }

    resetTimer() {
      clearTimeout(this.timer);
      this.timer = setTimeout(auth.doSignOut, 1800000);
    }

    getToken() {
      auth.getToken()
        .then((authToken) => {
          Logger.log(`IDToken: ${authToken}`);
          this.props.onSetAuthToken(authToken);
        }).catch((error) => {
          Logger.error(`${error}`);
        });
    }

    render() {
      return (
        <Component />
      );
    }
  }


  const mapDispatchToProps = (dispatch) => ({
    onSetAuthUser: (authUser) => dispatch({ type: 'AUTH_USER_SET', authUser }),
    onSetAuthToken: (authToken) => dispatch({ type: 'AUTH_TOKEN_SET', authToken }),
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
};

export default withAuthentication;
