import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import React  from 'react';

import * as routes from '../constants/routes';
import Navigation from './navigation/navigation.component';
import Home from './home/home.component';
import SignIn     from "./sign-in/sign-in.component";

const AppRouter = () => {
  return (
    <Router>
      <main>
        <Navigation/>

        <hr/>

        <Route exact path={routes.HOME}
               component={Home}/>
        <Route exact path={routes.SIGN_IN}
               component={SignIn}/>
      </main>
    </Router>
  );
};

export default AppRouter;
