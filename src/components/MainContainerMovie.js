import React from "react";
import { useSelector } from "react-redux";
import MainMovieTilte from "./MainMovieTilte";
import MainBgVideo from "./MainBgVideo";

const MainContainerMovie = () => {
  const movie = useSelector((store) => store.movie?.NowPlayingMovie);
  console.log(movie);
  if (!movie) return;
  const mainMovie = movie[0];
  const { title, overview, id } = mainMovie;
  return (
    <div>
      <MainMovieTilte title={title} overview={overview} />
      <MainBgVideo movieId={id} />
    </div>
  );
};

export default MainContainerMovie;
