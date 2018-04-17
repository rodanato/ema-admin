import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { firebase } from 'config/firebase';
import * as routes from 'constants/routes';

const withAuthorization = (authCondition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser) && !authUser) {
          this.props.history.push(routes.SIGN_IN);
        } else if (authUser) {
          this.props.history.push(routes.RESERVATIONS);
        }
      });
    }

    render() {
      return <Component /> ;
    }
  }

  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
  });

  return compose(
    withRouter,
    connect(mapStateToProps),
  )(WithAuthorization);
};

export default withAuthorization;
