import { combineReducers } from "redux";
import sliderMovieReducer from "./reducers/getCarousel";
import listMovieReducer from "./reducers/getListMovie";
import cinemaReducer from "./reducers/getCinema";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
  sliderMovieReducer,
  listMovieReducer,
  cinemaReducer,
  authReducer,
});
export default rootReducer;
