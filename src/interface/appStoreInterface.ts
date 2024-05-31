export interface Movie {
  id?: string;
  original_title?: string;
  overview?: string;
  original_language?: string;
  poster_path?: string;
  release_date?: string;
  title?: string;
}

export interface RootState {
  movies: {
    nowPlayingMovie: Movie[];
  };
  user: {};
}

export interface MovieTitleProps {
  title?: string;
  overview?: string;
  id?: string;
}

export interface MovieListInterface {
  title: string;
  movies: Movie[];
}

export interface MovieKeyInterface {
  key: number;
  movie: Movie;
}