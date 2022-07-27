import {
  SLIDER_MOVIE_REQUEST,
  SLIDER_MOVIE_FAILED,
  SLIDER_MOVIE_SUCCESS,
} from "redux/constants/carousel";

import { movieService } from "services/movieService";

const actFetchData = () => {
  return (dispatch) => {
    dispatch(actSliderMovieRequest());

    movieService

      .getCarousel()
      .then((res) => {
        dispatch(actSliderMovieSuccess(res.data.content));
      })
      .catch((err) => {
        dispatch(actSliderMovieFailed(err));
      });
  };
};

const actSliderMovieRequest = () => {
  return {
    type: SLIDER_MOVIE_REQUEST,
  };
};

const actSliderMovieSuccess = (data) => {
  return {
    type: SLIDER_MOVIE_SUCCESS,
    payload: data,
  };
};

const actSliderMovieFailed = (data) => {
  return {
    type: SLIDER_MOVIE_FAILED,
    payload: data,
  };
};

export { actFetchData };
