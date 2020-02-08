import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const MoviesCard = props => {
  return (
    <div className="col-md-4" key={props.imdbID}>
      <div className="card mb-4 shadow-sm">
        <img src={props.Poster} className="img-fluid" alt={props.Title} />
        <div className="card-body">
          <p className="card-text">
            {props.Title} - {props.Year}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link
                to={`/movies/${props.imdbID}`}
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </Link>
            </div>
            <small className="text-muted">{props.Type}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

MoviesCard.propTypes = {
  imdbID: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired
};

export default MoviesCard;
