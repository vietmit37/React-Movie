import {
  CINEMA_FAILED,
  CINEMA_REQUEST,
  CINEMA_SUCCESS,
} from "redux/constants/cinema";

const inititialState = {
  loading: false,
  data: null,
  error: null,
};

const cinemaReducer = (state = inititialState, action) => {
  switch (action.type) {
    case CINEMA_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }

    case CINEMA_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case CINEMA_FAILED: {
      state.loading = true;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default cinemaReducer;
