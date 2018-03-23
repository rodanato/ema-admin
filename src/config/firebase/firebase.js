import * as firebase from 'firebase';

const configEnv = {
  dev: {
    apiKey: "AIzaSyCj7EKhplhm0H431rcVgr1trXKlaVMxbmw",
    authDomain: "nina-dev-admin.firebaseapp.com",
    databaseURL: "https://nina-dev-admin.firebaseio.com",
    projectId: "nina-dev-admin",
    storageBucket: "nina-dev-admin.appspot.com",
    messagingSenderId: "701478703081"
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
