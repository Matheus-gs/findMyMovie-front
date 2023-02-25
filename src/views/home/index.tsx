import "./styles.scss";

import { Button } from "@ui5/webcomponents-react";
import { FiHeart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { MovieDescription } from "../../components/MovieDescription";
import { MovieReducer } from "../../types/ResponseGetMovieByTitleDTO";
import { MovieBanner } from "../../components/MovieBanner";
import { selectMovies } from "../../store/slices/movieSlice";
import { toast } from "react-toastify";

export function Home() {
  const movieList = useSelector(selectMovies);
  const currentMovieSearched: MovieReducer = movieList[movieList.length - 1];

  function showInProgressMessage() {
    toast.warning("We are working in this feature, please try again in a few weeks :)");
  }

  return (
    <div className="home-container">
      {currentMovieSearched && (
        <div className="movie-container">
          <div className="movie-info-container">
            <MovieDescription {...currentMovieSearched} />
            <Button
              className="m-top-2 movie-info-favorite-button"
              onClick={showInProgressMessage}
            >
              Favorite <FiHeart />
            </Button>
          </div>
          <MovieBanner {...currentMovieSearched} />
        </div>
      )}

      {!currentMovieSearched && (
        <div className="intro">
          <h2>Welcome to FindMyMovie!</h2>
          <p>You can start by searching for some movie's in that field above 💪🏽🚀</p>

          <h2>My suggestions: </h2>
          <p>Avengers</p>
          <p>Blade Runner</p>
          <p>Star Wars</p>
          <p>Iron Man 3</p>

          <h2>Tech's that i used</h2>
          <p>React + Redux + TS + UI5 Components + SCSS (Front)</p>
          <p>Node + NestJS + TS (Back)</p>
        </div>
      )}
    </div>
  );
}
