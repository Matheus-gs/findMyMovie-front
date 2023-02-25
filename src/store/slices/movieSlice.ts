import { MovieReducer } from "./../../types/ResponseGetMovieByTitleDTO";
import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: <MovieReducer[]>[],
  reducers: {
    setMovie(state, { payload }) {
      state.push({
        Id: payload.Id,
        Title: payload.Title,
        Actors: payload.Actors,
        Plot: payload.Plot,
        Poster: payload.Poster,
        Ratings: payload.Ratings,
        imdbRating: payload.imdbRating,
        isFavorite: false,
      });
    },
    toggleFavoriteMovie(state, { payload }) {
      return { ...state, isFavorite: payload.isFavorite };
    },
  },
});

export const { setMovie } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;

export const selectMovies = (state: any) => state.movies;
