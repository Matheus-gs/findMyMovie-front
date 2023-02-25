import "./styles.scss";
import { MovieReducer } from "../../types/ResponseGetMovieByTitleDTO";

export function MovieBanner({ Poster }: MovieReducer) {
  return <img className="movie-banner" src={Poster} alt="movie_poster" />;
}
