import React from 'react'
import {MovieTitleProps } from '../interface/appStoreInterface'

const MovieTitle: React.FunctionComponent<MovieTitleProps> = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-lg pt-2 w-1/3">{overview}</p>
      <div className="flex p">
        <button className="bg-white text-black m-2 px-14 py-3 rounded-md text-xl hover:bg-opacity-50">▶ Play</button>
        <button className="bg-gray-500 text-black m-2 px-14 py-3 rounded-md bg-opacity-50 text-xl">ℹ  More Info</button>
      </div>
    </div>
  );
};

export default MovieTitle;