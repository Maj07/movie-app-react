import React, { useState, useContext } from "react";
import "./Search.css";

import { searchMovies } from "../../services/movies.service";
import { MoviesContext } from "../../services/context";

export const Search = () => {
  const [search, setSearch] = useState("");
  const { updateMovies } = useContext(MoviesContext);

  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (search) {
      searchMovies(search).then((movies) => {
        updateMovies(movies);
      });
    }
  };

  return (
    <div>
      <form name="form" onSubmit={(e) => handleOnSubmit(e)} noValidate>
        <input
          type="text"
          name="movie"
          className="search__input"
          placeholder="Search movie ... "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};
