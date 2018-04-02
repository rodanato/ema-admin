import { combineReducers } from 'redux';
import sessionReducer      from '../shared/reducers/session.reducer';

const reducer = combineReducers({
  sessionState: sessionReducer,
});

export default reducer;
