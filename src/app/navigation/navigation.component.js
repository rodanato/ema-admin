import React from 'react';

import {
  Link
} from 'react-router-dom';

import * as routes from 'constants/routes';

let Navigation = ({ authUser }) => {
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
    <li>Logout</li>
  </ul>;

const NavigationNonAuth = () =>
  <ul>
  </ul>;


export default Navigation;
