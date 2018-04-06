import * as firebase from 'firebase';

const configEnv = {
  dev: {
    API: 'https://ema-admin-console-dev.appspot.com/_ah/api/nina/',
    firebase: {
      apiKey: "AIzaSyDVeA2NCo0fiOnesrcUBZJHJOTeYxmPFLk",
      authDomain: "ema-admin.firebaseapp.com",
      databaseURL: "https://ema-admin.firebaseio.com",
      projectId: "ema-admin",
      storageBucket: "ema-admin.appspot.com",
      messagingSenderId: "870901100380"
    }
  },
  qa: {
    API: 'https://ema-admin-console-qa.appspot.com/_ah/api/nina/',
    firebase: {

    }
  },
  uat: {
    API: 'https://ema-admin-console-uat.appspot.com/_ah/api/nina/',
    firebase: {

    }
  },
  prod: {
    API: 'https://ema-admin-console.appspot.com/_ah/api/nina/',
    firebase: {

    }
  }
};

const env = process.env.REACT_APP_ENV;
const config = configEnv[env];

if (!firebase.apps.length) {
  firebase.initializeApp(config.firebase);
}

const auth = firebase.auth();

export {
  auth,
  config
};
