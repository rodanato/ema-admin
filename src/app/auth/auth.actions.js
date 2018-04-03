
const applySetAuthUser = (state, action) => ({
  ...state,
  authUser: action.authUser
});


const applySetAuthToken = (state, action) => ({
  ...state,
  authToken: action.authToken
});

export {
  applySetAuthUser,
  applySetAuthToken
};
