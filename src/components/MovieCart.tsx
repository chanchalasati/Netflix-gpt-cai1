import React from 'react'
import { MovieKeyInterface, MovieListInterface } from '../interface/appStoreInterface';
import { movieImagerl } from '../utils/Constant';

const MovieCart: React.FunctionComponent<MovieKeyInterface> = ({ key, movie } ) => {
  const imageurl = movieImagerl + movie?.poster_path;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={movieImagerl + movie?.poster_path} alt="imagepath" />
    </div>
  )
}

export default MovieCart