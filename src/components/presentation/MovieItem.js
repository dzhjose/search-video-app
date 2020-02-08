import React from "react";
import { Link } from "react-router-dom";

const MovieItem = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 card card-body">
          <img src={props.movie.Poster} className="thumbnail" alt="Poster" />
        </div>
        <div className="col-md-8">
          <h2 className="mb-4">{props.movie.Title}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Genre:</strong> {props.movie.Genre}
            </li>
            <li className="list-group-item">
              <strong>Released:</strong> {props.movie.Released}
            </li>
            <li className="list-group-item">
              <strong>Rated:</strong> {props.movie.Rated}
            </li>
            <li className="list-group-item">
              <strong>IMDB Rating:</strong> {props.movie.imdbRating}
            </li>
            <li className="list-group-item">
              <strong>Director:</strong> {props.movie.Director}
            </li>
            <li className="list-group-item">
              <strong>Writer:</strong> {props.movie.Writer}
            </li>
            <li className="list-group-item">
              <strong>Actors:</strong> {props.movie.Actors}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="card card-body bg-dark my-5 text-light">
          <div className="col-md-12">
            <h3>About </h3>
            {props.movie.Plot}
            <hr />
            <a
              href={"https://www.imdb.com/title/" + props.movie.imdbID}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View on IMDB
            </a>
            <Link to="/" className="btn btn-default text-light">
              Go Back To Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
