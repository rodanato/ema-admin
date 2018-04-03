import React  from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import withAuthentication from 'shared/components/with-authentication/with-authentication.component';
import * as routes from '../constants/routes';
import Navigation  from './navigation/navigation.container';
import Home        from './home/home.container';
import SignIn      from "./sign-in/sign-in.component.container";

const AppRouter = () => {
  return (
    <Router>
      <main>
        <Navigation/>

        <Route exact path={routes.HOME}
               component={Home}/>
        <Route exact path={routes.SIGN_IN}
               component={SignIn}/>
      </main>
    </Router>
  );
};

export default withAuthentication(AppRouter);
