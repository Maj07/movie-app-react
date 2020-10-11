import React from "react";
import { Movie } from "./movies.service";

export const MoviesContext = React.createContext<{
  movies: Movie[];
  updateMovies: Function;
}>({
  movies: [],
  updateMovies: Function,
});
