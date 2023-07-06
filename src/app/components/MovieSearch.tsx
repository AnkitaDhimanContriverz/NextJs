"use client";

import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { searchMovies } from "../service/movie.service";
import SearchBar from "./SearchBar";

const MovieSearch = () => {
  const [movie, setMovie] = useState([]);

  const handleSearch = async (query: string) => {
    const results = await searchMovies(query);
    setMovie(results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {movie.map((mov: any) => {
          return (
            <MovieCard
              id={mov.id}
              title={mov.title}
              overview={mov.overview}
              posterPath={mov.poster_path}
              vote_average={mov.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieSearch;
