import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryComponent = () => {
  const movies = useSelector((store) => (store as any).movies?.nowPlayingMovie);
  return (
    <div className="bg-black ">
       <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
      <MovieList title={"NowPlaynig Movie"} movies={movies} />
      <MovieList title={"NowPlaynig Movie"} movies={movies} />
      <MovieList title={"NowPlaynig Movie"} movies={movies} />
      <MovieList title={"NowPlaynig Movie"} movies={movies} />
      </div>
    </div>
  )
}

export default SecondaryComponent