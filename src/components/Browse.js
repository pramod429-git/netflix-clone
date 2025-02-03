import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainerMovie from "./MainContainerMovie";
import SecondaryContainerMovie from "./SecondaryContainerMovie";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const GPTSearchPage = useSelector((store) => store.gptSearch.toggleSearch);
  console.log("browser load");

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {GPTSearchPage ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainerMovie />
          <SecondaryContainerMovie />
        </>
      )}
    </div>
  );
};

export default Browse;
