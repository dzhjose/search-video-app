import { FETCH_MOVIES, GET_MOVIE, SEARCH_MOVIE, LOADER } from "../actions/types";

const initialState = {
  items: [],
  item: {},
  loader: false,
  movie_search: ""
};

export const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        items: action.pyload,
        loader: false
      };
    case GET_MOVIE:
      return {
        ...state,
        item: action.pyload,
        loader: false
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        items: action.pyload.movies,
        movie_search: action.pyload.movie,
        loader: false
      };
    case LOADER:
      return{
        ...state,
        loader: true,
      }
    default:
      return state;
  }
};
