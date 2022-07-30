import {
  SLIDER_MOVIE_REQUEST,
  SLIDER_MOVIE_SUCCESS,
  SLIDER_MOVIE_FAILED,
} from "redux/constants/carousel";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const sliderMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SLIDER_MOVIE_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }

    case SLIDER_MOVIE_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case SLIDER_MOVIE_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default sliderMovieReducer;
