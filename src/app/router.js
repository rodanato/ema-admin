import React    from 'react';
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch
}               from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading  from 'shared/components/loading/loading.component';

import withAuthentication from 'shared/components/with-authentication/with-authentication.component';
import * as routes        from '../constants/routes';
import Navigation         from './navigation/navigation.container';

const Home = Loadable({
  loader: () => import('./home/home.container'),
  loading: Loading,
});

const SignIn = Loadable({
  loader: () => import('./sign-in/sign-in.container'),
  loading: Loading,
});

const Reservations = Loadable({
  loader: () => import('./reservations/reservations.container'),
  loading: Loading,
});

const AppRouter = () => {
  return (
    <HashRouter>
      <main>
        <header className={'header'}>
          <Navigation/>
        </header>

        <Switch>
          <Route exact path={routes.HOME}
                 component={Home}/>
          <Route exact path={routes.SIGN_IN}
                 component={SignIn}/>
          <Route exact path={routes.RESERVATIONS}
                 component={Reservations}/>
        </Switch>
      </main>
    </HashRouter>
  );
};

export default withAuthentication(AppRouter);
