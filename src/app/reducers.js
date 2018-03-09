import { combineReducers } from 'redux';
import search from './starships-library/search/search.reducer';
import filter from './starships-library/filter/filter.reducer';
import saveStarshipsData from './starships-library/starships-library.reducer';

const reducer = combineReducers({
  search,
  filter,
  saveStarshipsData
});

export default reducer;
