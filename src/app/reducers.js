import jsonData from './data.json'

const initalState = {
  data: jsonData,
  isLoading: false,
  isError: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'fetchData':
      return {
        ...state,
        data: jsonData,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;