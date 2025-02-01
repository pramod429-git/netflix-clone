import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainerMovie from "./MainContainerMovie";
import SecondaryContainerMovie from "./SecondaryContainerMovie";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  console.log("browser load");

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainerMovie />
      <SecondaryContainerMovie />
      <div></div>
    </div>
  );
};

export default Browse;
