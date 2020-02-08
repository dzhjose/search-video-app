import React, { Component } from "react";
import MoviesCard from "../presentation/MoviesCard";
import NotFound from "../presentation/NotFound";
import Spinner from "../Spinner";
import { connect } from "react-redux";
import { fetchMovies, setLoader } from "../../actions/MovieAction";

class Movies extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setLoader();
    this.props.fetchMovies();
  }

  _renderMovieItems() {
    const { movies } = this.props;
    return movies.length > 0
      ? movies.map(m => {
          return (
            <MoviesCard
              key={m.imdbID}
              imdbID={m.imdbID}
              Title={m.Title}
              Poster={m.Poster}
              Year={m.Year}
              Type={m.Type}
            />
          );
        })
      : <NotFound>Movie not found!</NotFound>;
  }

  _handleRender(){
    if (this.props.loader) {
      return <Spinner />;
    }

    return this._renderMovieItems();
  }

  render() {
    return (
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">{this._handleRender()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.items,
  loader: state.movies.loader
});

export default connect(mapStateToProps, { fetchMovies, setLoader })(Movies);
