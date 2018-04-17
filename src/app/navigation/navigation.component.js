import React from 'react';

import {
  Link
} from 'react-router-dom';

import * as routes from 'constants/routes';
import { auth } from 'config/firebase'

let Navigation = ({ authUser }) => {
  return (
    <nav className={'nav'}>
      { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
      }
    </nav>
  );
};

const NavigationAuth = () =>
  <div className={'level nav__container'}>
    {/*<ul className={'level-left'}>*/}
      {/*<li><Link to={routes.HOME}>Home</Link></li>*/}
    {/*</ul>*/}
    <div className="level-center">
      <img src={process.env.PUBLIC_URL + '/images/logo.svg'}
           alt='Logo'/>
    </div>

    <div className={'level-right nav__right'}>
      <h6>Valeria Tapia</h6>
      <span onClick={() => auth.doSignOut()}>
        Cerrar sesión
      </span>
    </div>
  </div>;

const NavigationNonAuth = () =>
  <div>
  </div>;

export default Navigation;
