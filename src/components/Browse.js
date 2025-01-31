import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainerMovie from "./MainContainerMovie";
import SecondaryContainerMovie from "./SecondaryContainerMovie";

const Browse = () => {
  console.log("browser load");

  useNowPlayingMovies();
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
