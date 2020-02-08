import React, { Component } from "react";
import MovieItem from "../presentation/MovieItem";
import { getMovie, setLoader } from "../../actions/MovieAction";
import Spinner from "../Spinner";

import { connect } from "react-redux";

class MovieDetail extends Component {
  componentDidMount() {
    this.props.setLoader();
    setTimeout(() => {
      this.props.getMovie(this.props.id);
    }, 1000);
  }

  _renderMovieItem() {
    if (this.props.loader) {
      return <Spinner />;
    }

    return <MovieItem movie={this.props.movie} />;
  }

  render() {
    return <div className="container mt-3">{this._renderMovieItem()}</div>;
  }
}

const mapStateToProps = state => ({
  movie: state.movies.item,
  loader: state.movies.loader
});

export default connect(mapStateToProps, { getMovie, setLoader })(MovieDetail);
