import {
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_FAILED,
  LIST_MOVIE_SHOWING,
  LIST_MOVIE_PREPARE_SHOWING,
} from "redux/constants/listMovie";
<<<<<<< HEAD
import { movieServices } from "services/movieService";
=======
import { movieService } from "services/movieService";
>>>>>>> 446d025fb50ae36ca88537e21dade91d5d18b5c8

const actFetchData = () => {
  return (dispatch) => {
    dispatch(actListMovieRequest());

<<<<<<< HEAD
    movieServices
      .getMovie()
=======
    movieService
      .getFilm()
>>>>>>> 446d025fb50ae36ca88537e21dade91d5d18b5c8
      .then((res) => {
        dispatch(actListMovieSuccess(res.data.content));
      })
      .catch((error) => {
        dispatch(actListMovieFailed(error));
      });
  };
};

const actListMovieRequest = () => {
  return {
    type: LIST_MOVIE_REQUEST,
  };
};

const actListMovieSuccess = (data) => {
  return {
    type: LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

const actListMovieSuccessShowing = (data) => {
  return {
    type: LIST_MOVIE_SHOWING,
    payload: data,
  };
};

const actListMovieSuccessPrepareShowing = (data) => {
  return {
    type: LIST_MOVIE_PREPARE_SHOWING,
    payload: data,
  };
};

const actListMovieFailed = (error) => {
  return {
    type: LIST_MOVIE_FAILED,
    payload: error,
  };
};

export {
  actFetchData,
  actListMovieSuccessShowing,
  actListMovieSuccessPrepareShowing,
};
