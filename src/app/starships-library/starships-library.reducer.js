const saveStarshipsData = (state = '', action) => {
  switch (action.type) {
    case 'SAVE_STARSHIPS_DATA':
      return action.data;
    default:
      return state;
  }
};

export default saveStarshipsData;
