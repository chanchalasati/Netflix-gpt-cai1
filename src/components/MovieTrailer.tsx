import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { MovieTitleProps } from "../interface/appStoreInterface";

const MovieTrailer: React.FunctionComponent<MovieTitleProps> = ({ id }) => {
  useMovieTrailer(id);
  const trailerId = useSelector((store) => (store as any).movies?.trailerId);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  );
};

export default MovieTrailer;
