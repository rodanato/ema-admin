import * as firebase from 'firebase';

const configEnv = {
  dev: {
    apiKey: "AIzaSyDVeA2NCo0fiOnesrcUBZJHJOTeYxmPFLk",
    authDomain: "ema-admin.firebaseapp.com",
    databaseURL: "https://ema-admin.firebaseio.com",
    projectId: "ema-admin",
    storageBucket: "ema-admin.appspot.com",
    messagingSenderId: "870901100380"
  },
  qa: {},
  uat: {},
  prod: {}
};

const config = configEnv[process.env.REACT_APP_ENV];

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
