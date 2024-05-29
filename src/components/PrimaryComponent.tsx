import React from 'react'
import { useSelector } from 'react-redux'
import { Movie, RootState } from '../interface/appStoreInterface';
import MovieTitle from './MovieTitle';
import MovieTrailer from './MovieTrailer';

const PrimaryComponent = () => {
  const movies = useSelector((store) => (store as any).movies?.nowPlayingMovie);
  if (!movies) return null;
  const movie: any = movies[0];
  const { id, original_title, overview } = movie;
  return (
    <div>
       <MovieTitle title={original_title} overview={overview}/>
      <MovieTrailer id={ id}/>
     
    </div>
  )
}

export default PrimaryComponent