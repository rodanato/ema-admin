import React from 'react';

import {
  Link
} from 'react-router-dom';

import * as routes from 'constants/routes';
import { auth } from 'config/firebase'

let timer;
let Navigation = ({ authUser }) => {
  StartLogoutTimeout();

  return (
    <nav>
      { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
      }
    </nav>
  );
};

const NavigationAuth = () =>
  <ul>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li onClick={() => auth.doSignOut()}>Logout</li>
  </ul>;

const NavigationNonAuth = () =>
  <ul>
  </ul>;

const StartLogoutTimeout = () => {
  window.onmousemove = resetTimer;
};

let resetTimer = () => {
  clearTimeout(timer);
  timer = setTimeout(auth.doSignOut, 1800000);
};

export default Navigation;
