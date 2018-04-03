import { combineReducers } from 'redux';
import authReducer         from './auth/auth.reducer';

const reducer = combineReducers({
  sessionState: authReducer,
});

export default reducer;
