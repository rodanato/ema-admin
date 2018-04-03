
const Logger = {
  log: (message) => {
    if (process.env.REACT_APP_ENV !== 'prod') {
      console.info(message);
    }
  },
  error: (message) => {
    if (process.env.REACT_APP_ENV !== 'prod') {
      console.error(message);
    }
  }
};


export {
  Logger
};
