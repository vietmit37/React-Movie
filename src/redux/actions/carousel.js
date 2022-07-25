<<<<<<< HEAD
import { carouselService } from "services/carouselServices";

=======
>>>>>>> 446d025fb50ae36ca88537e21dade91d5d18b5c8
import {
  SLIDER_MOVIE_REQUEST,
  SLIDER_MOVIE_FAILED,
  SLIDER_MOVIE_SUCCESS,
} from "redux/constants/carousel";
<<<<<<< HEAD
=======
import { movieService } from "services/movieService";
>>>>>>> 446d025fb50ae36ca88537e21dade91d5d18b5c8

const actFetchData = () => {
  return (dispatch) => {
    dispatch(actSliderMovieRequest());

<<<<<<< HEAD
    carouselService
=======
    movieService
>>>>>>> 446d025fb50ae36ca88537e21dade91d5d18b5c8
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
