import {
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_FAILED,
  LIST_MOVIE_SHOWING,
  LIST_MOVIE_PREPARE_SHOWING,
} from "redux/constants/listMovie";

const initialState = {
  loading: false,
  data: null,
  error: null,
  dangChieu: true,
  sapChieu: true,
  dataDefault: null,
};

const listMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_MOVIE_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }

    case LIST_MOVIE_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.dataDefault = state.data;
      state.error = null;
      return { ...state };
    }

    case LIST_MOVIE_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    case LIST_MOVIE_SHOWING: {
      state.dangChieu = !state.dangChieu;
      state.data = state.dataDefault.filter(
        (movie) => movie.dangChieu === state.dangChieu
      );

      return { ...state };
    }

    case LIST_MOVIE_PREPARE_SHOWING: {
      state.sapChieu = !state.sapChieu;
      state.data = state.dataDefault.filter(
        (movie) => movie.sapChieu === state.sapChieu
      );
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default listMovieReducer;
