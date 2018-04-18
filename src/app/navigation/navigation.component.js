import React from 'react';
import { auth } from 'config/firebase'
import './navigation.component.css';

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
  <div className={'nav__container'}>
    {/*<ul className={'level-left'}>*/}
      {/*<li><Link to={routes.HOME}>Home</Link></li>*/}
    {/*</ul>*/}
    <img width="137"
         src={process.env.PUBLIC_URL + '/images/logo.svg'}
         className={'nav__logo'}
         alt='Logo'/>

    <div className={'nav__right'}>
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
