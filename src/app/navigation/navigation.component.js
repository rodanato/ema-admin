import React from 'react';
import {
  Link
} from 'react-router-dom';
import * as routes from '../../constants/routes';

let Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
        <li><Link to={routes.HOME}>Home</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
