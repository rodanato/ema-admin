import React  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Loadable from 'react-loadable';

import withAuthentication from 'shared/components/with-authentication/with-authentication.component';
import * as routes from '../constants/routes';
import Navigation  from './navigation/navigation.container';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./home/home.container'),
  loading: Loading,
});

const SignIn = Loadable({
  loader: () => import('./sign-in/sign-in.component.container'),
  loading: Loading,
});

const AppRouter = () => {
  return (
    <Router>
      <main>
        <Navigation/>

        <Switch>
          <Route exact path={routes.HOME}
                 component={Home}/>
          <Route exact path={routes.SIGN_IN}
                 component={SignIn}/>
        </Switch>
      </main>
    </Router>
  );
};

export default withAuthentication(AppRouter);
