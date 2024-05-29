import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { movie_trailer } from "../utils/Constant";
import { addTrailerId } from "../utils/movieSlice";

const useMovieTrailer = (id: string | undefined) => {
  const dispatch = useDispatch();
  //fetching movire trailer, clip, videos
  const getPlaynigMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      movie_trailer
    );
    const response = await data.json();
    const filterData = response.results.filter(
      (object: { type: any }) => object.type === "Trailer"
    );
    const trailerObject = filterData.length
      ? filterData[0]
      : response.results[0];
    dispatch(addTrailerId(trailerObject.key));
  };

  useEffect(() => {
    if (id) {
      getPlaynigMovieTrailer();
    }
  }, [id]);
};

export default useMovieTrailer;
