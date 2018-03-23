import { auth } from './firebase';

export const loggedIn = () => auth.onAuthStateChanged((user) => {
  this.authenticated = !!user;
  if (this.authenticated) {
    this.getToken();
  }
});

export const getToken = () =>
  auth.currentUser
  .getIdToken(true);

export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const doSignOut = () =>
  auth.signOut();
