import { FETCH_MOVIES, GET_MOVIE, LOADER, SEARCH_MOVIE } from "./types";

import axios from "axios";

export const fetchMovies = () => dispatch => {
  axios
    .get(`http://www.omdbapi.com/?apikey=893419ff&s=Dracula`)
    .then(rs => {
      dispatch({ type: FETCH_MOVIES, pyload: rs.data.Search });
      console.log(rs.data.Search);
    })
    .catch(e => {
      console.log(e);
    });
};

export const searchMovie = movie => dispatch => {
  axios
    .get(`http://www.omdbapi.com/?apikey=893419ff&s=${movie}`)
    .then(rs => {
      if(rs.data.Search){
        dispatch({ type: SEARCH_MOVIE, pyload: {movies:rs.data.Search, movie: movie} });
      } else{
        dispatch({ type: SEARCH_MOVIE, pyload: {movies:[], movie: movie}});
      }
    })
    .catch(e => {
      console.log(e);
    });
};

export const getMovie = id => dispatch => {
  axios
    .get(`http://www.omdbapi.com/?apikey=893419ff&i=${id}&plot=full`)
    .then(rs => {
      dispatch({ type: GET_MOVIE, pyload: rs.data });
      console.log(rs.data);
    })
    .catch(e => {
      console.log(e);
    });
};

export const setLoader = ()  => {
  //return dispatch({ type: LOADER, pyload: true });
  return {
    type: LOADER
  }
}
