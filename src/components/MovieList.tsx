import React from 'react'
import {Movie, MovieListInterface} from "../interface/appStoreInterface";
import MovieCart from './MovieCart';

const MovieList: React.FunctionComponent<MovieListInterface> = ({ title, movies }) => {
  return (
    
    <div className="px-6 bg-black">
       <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movieObj : Movie, index:number) => <MovieCart key={index} movie={movieObj} />)}
        </div>
      </div>
    </div>
  )
}

export default MovieList