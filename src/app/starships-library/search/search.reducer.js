const search = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.searchValue;
    default:
      return state;
  }
};

export default search;