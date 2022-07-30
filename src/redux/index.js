import { combineReducers } from "redux";
import sliderMovieReducer from "./reducers/getCarousel";
import listMovieReducer from "./reducers/getListMovie";
import cinemaReducer from "./reducers/getCinema";
import authReducer from "./reducers/auth";
import registerReducer from "./reducers/register";
import { quanLiRapReducer } from "./reducers/quanLiRap";
import { quanLiDatVeReducer } from "./reducers/quanLiDatVe";
import { loadingReducer } from "./reducers/loadingReducer";
import { adminReducer } from "./reducers/admin.reducer";

const rootReducer = combineReducers({
  sliderMovieReducer,
  listMovieReducer,
  cinemaReducer,
  authReducer,
  registerReducer,
  quanLiRapReducer,
  quanLiDatVeReducer,
  loadingReducer,
  adminReducer,
});
export default rootReducer;
