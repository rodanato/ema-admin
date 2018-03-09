const filter = (state = '', action) => {
  switch (action.type) {
    case 'FILTER':
      return action.value;
    default:
      return state;
  }
};

export default filter;
