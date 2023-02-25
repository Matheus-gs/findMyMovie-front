import "./styles.scss";
import { RatingIndicator } from "@ui5/webcomponents-react";
import { ResponseGetMovieByTitleDTO } from "../../types/ResponseGetMovieByTitleDTO";
export function MovieDescription({
  Title,
  Plot,
  Actors,
  imdbRating,
}: ResponseGetMovieByTitleDTO) {
  return (
    <>
      <div className="movie-info-description">
        <h2>{Title}</h2>
        <p>{Plot}</p>
      </div>
      <div>
        <div className="movie-info-details">
          <p>
            <strong>Actors:</strong> {Actors}
          </p>
        </div>
        <div className="movie-info-details">
          <strong>Review: </strong> <RatingIndicator value={+imdbRating % 5} />
        </div>
      </div>
    </>
  );
}
