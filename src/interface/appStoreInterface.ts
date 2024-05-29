
export interface Movie {
  id ?:string,
  original_title ?: string,
  overview ?: string;
  }
  
export interface RootState {
    movies: {
      nowPlayingMovie: Movie[];
    };
    user: {
        
    }
}
  
export interface MovieTitleProps {
  title ?: string;
  overview ?: string;
  id ?: string;
}