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
      apiKey: "AIzaSyDlH_nfRlXnBV1Xk7FTME6B25NRsUV8hF0",
      authDomain: "ema-admin-console-qa.firebaseapp.com",
      databaseURL: "https://ema-admin-console-qa.firebaseio.com",
      projectId: "ema-admin-console-qa",
      storageBucket: "ema-admin-console-qa.appspot.com",
      messagingSenderId: "1039914364880"
    }
  },
  uat: {
    API: 'https://ema-admin-console-uat.appspot.com/_ah/api/nina/',
    firebase: {
      apiKey: "AIzaSyC0PKJymr67LpQZ3CCetjvq3Om6SnU1I0o",
      authDomain: "ema-admin-console-uat.firebaseapp.com",
      databaseURL: "https://ema-admin-console-uat.firebaseio.com",
      projectId: "ema-admin-console-uat",
      storageBucket: "",
      messagingSenderId: "174391945125"
    }
  },
  prod: {
    API: 'https://ema-admin-console.appspot.com/_ah/api/nina/',
    firebase: {
      apiKey: "AIzaSyDVeA2NCo0fiOnesrcUBZJHJOTeYxmPFLk",
      authDomain: "ema-admin.firebaseapp.com",
      databaseURL: "https://ema-admin.firebaseio.com",
      projectId: "ema-admin",
      storageBucket: "ema-admin.appspot.com",
      messagingSenderId: "870901100380"
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
