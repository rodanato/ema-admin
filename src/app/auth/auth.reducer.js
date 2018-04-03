import {
  applySetAuthUser ,
  applySetAuthToken
} from './auth.actions';
import { AUTH_INITIAL_STATE } from 'constants/state'


function authReducer(state = AUTH_INITIAL_STATE, action) {
  switch(action.type) {
    case 'AUTH_USER_SET': {
      return applySetAuthUser(state, action);
    }
    case 'AUTH_TOKEN_SET': {
      return applySetAuthToken(state, action);
    }
    default : return state;
  }
}

export default authReducer;
