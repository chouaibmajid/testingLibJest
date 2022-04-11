const initialState = {
  data: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        loading: true,
      }
    }
    case "GET-DATA": {
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    }
    default:
      return state;
  }
};
