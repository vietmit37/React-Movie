const initialState = {
  isLoading: false,
};

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HIDE_LOADING":
      return {
        ...state,
        isLoading: false,
      };
    case "SHOW_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
