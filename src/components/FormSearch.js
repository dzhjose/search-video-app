import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { searchMovie, setLoader } from "../actions/MovieAction";

class FormSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: this.props.movie };
  }
  
  _submitForm = e => {
    e.preventDefault();
    this.props.setLoader();
    this.props.searchMovie(this.state.movie);
  };
  render() {
    return (
      <section className="jumbotron text-center">
        <div className="container">
          <h1>Search a movie</h1>
          <form onSubmit={this._submitForm}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Movie search"
                aria-describedby="basic-addon2"
                onChange={e => this.setState({ movie: e.target.value })}
                value={this.state.movie}
              />
              <div className="input-group-append">
                <button className="input-group-text" id="basic-addon2">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movies.movie_search
});
export default connect(mapStateToProps, { searchMovie, setLoader })(FormSearch);
