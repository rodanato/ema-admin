import React from 'react';
import {
  Link
} from 'react-router-dom';

let Header = () => {
  return (
    <header>
      <img src={process.env.PUBLIC_URL + '/images/logo.png'}
    alt="Logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/library">Library</Link></li>
      </ul>
    </header>
  );
};

export default Header;
