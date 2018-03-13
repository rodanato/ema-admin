import * as firebase from 'firebase';

const devConfig = {
  apiKey: "AIzaSyBTTHSLbpFy5fyqzu_c0bmZ42sptibenzs",
  authDomain: "nina-dev.firebaseapp.com",
  databaseURL: "https://nina-dev.firebaseio.com",
  projectId: "nina-dev",
  storageBucket: "nina-dev.appspot.com",
  messagingSenderId: "802812513496"
};

const prodConfig = {
  apiKey: "AIzaSyC8NSFaht1dOrmaRfoJ-EMVYLdTXR7GMNQ",
  authDomain: "nina-qa.firebaseapp.com",
  databaseURL: "https://nina-qa.firebaseio.com",
  projectId: "nina-qa",
  storageBucket: "nina-qa.appspot.com",
  messagingSenderId: "143352312703"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
