import React from 'react'
import {MovieTitleProps } from '../interface/appStoreInterface'

const MovieTitle: React.FunctionComponent<MovieTitleProps> = ({ title, overview }) => {
  return (
    <div className="pt-45 pt-36 mx-10">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-lg pt-2 w-1/3">{overview}</p>
      <div className="flex p">
        <button className="bg-gray-500 text-black m-2 px-14 py-3 rounded-md bg-opacity-50 text-xl">▶  Play</button>
        <button className="bg-gray-500 text-black m-2 px-14 py-3 rounded-md bg-opacity-50 text-xl">More Info</button>
      </div>
    </div>
  );
};

export default MovieTitle;