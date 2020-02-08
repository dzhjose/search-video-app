import React from 'react'
import MovieDetail from '../../components/containers/MovieDetail'

export default function DetailMovie(props) {
  return (
    <React.Fragment>
      <MovieDetail id={props.match.params.id}/>
    </React.Fragment>
  )
}
