import { combineReducers } from "redux";
import {MovieReducer} from "./movies";

const rootReducers = combineReducers({
  movies: MovieReducer
});

export default rootReducers;
