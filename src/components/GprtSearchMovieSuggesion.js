import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GprtSearchMovieSuggesion = () => {
  const { searchResult, searchName } = useSelector((store) => store.gptSearch);
  //console.log(searchName);
  //if (!searchName) return null;
  if (
    !Array.isArray(searchName) ||
    searchName.length === 0 ||
    !Array.isArray(searchResult) ||
    searchResult.length === 0
  )
    return null;
  console.log(searchName);
  return (
    <div className="bg-black bg-opacity-30">
      {searchName.map((movieName, index) => (
        <MoviesList
          key={movieName}
          title={movieName}
          movies={searchResult[index] || []} //added [] because initailly store(NowPlayingMovie) was not having value
        />
      ))}
    </div>
  );
};

export default GprtSearchMovieSuggesion;
