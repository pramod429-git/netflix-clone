import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainerMovie = () => {
  const movies = useSelector((store) => store?.movie);
  console.log(movies);
  return (
    <div className="bg-black">
      <div className="-mt-60 relative">
        <MoviesList
          title={"Now Playing"}
          movies={movies?.NowPlayingMovie || []} //added [] because initailly store(NowPlayingMovie) was not having value
        />

        <MoviesList
          title={"Popular"}
          movies={movies?.PopularMovie || []} //added [] because initailly store(NowPlayingMovie) was not having value
        />
        <MoviesList
          title={"Top Rated Movies"}
          movies={movies?.TopRatedMovie || []} //added [] because initailly store(NowPlayingMovie) was not having value
        />
        <MoviesList
          title={"Upcoming"}
          movies={movies?.UpcomingMovie || []} //added [] because initailly store(NowPlayingMovie) was not having value
        />
        <MoviesList
          title={"Hollywood-Thrillers"}
          movies={movies?.NowPlayingMovie || []} //added [] because initailly store(NowPlayingMovie) was not having value
        />
      </div>
    </div>
  );
};

export default SecondaryContainerMovie;
