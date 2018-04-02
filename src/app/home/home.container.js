import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Home from './home.component';

import withAuthorization from './withAuthorizationComponent';
import { db } from '../firebase';


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

const authCondition = (authUser) => !!authUser;


const HomeContainer = compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(Home);

export default HomeContainer;
