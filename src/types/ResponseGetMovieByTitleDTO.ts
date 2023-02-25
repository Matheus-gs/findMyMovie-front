import { IResponseGetMovieByTitle } from "../interfaces/IResponseGetMovieByTitle";

export type ResponseGetMovieByTitleDTO = Pick<
  IResponseGetMovieByTitle,
  "Title" | "Actors" | "Plot" | "Poster" | "Ratings" | "imdbRating"
>;
export interface MovieReducer extends ResponseGetMovieByTitleDTO {
  Id: string;
  isFavorite?: boolean;
}