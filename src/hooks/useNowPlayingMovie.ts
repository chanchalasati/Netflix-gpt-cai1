import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_movie_option } from "../utils/Constant";
import { addNowPlayingMovie } from "../utils/movieSlice";

const useNowPlayingMovie = () => {
    
    const dispatch = useDispatch();
    const getNowPlaynigMovie = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        get_movie_option
      );
      const response = await data.json();
      dispatch(addNowPlayingMovie(response.results));
    };
    useEffect(() => {
      getNowPlaynigMovie();
    }, []);

}

export default useNowPlayingMovie;