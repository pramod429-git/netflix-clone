import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl px-4 py-3 text-white">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <MoviesCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
