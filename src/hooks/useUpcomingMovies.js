import { useDispatch } from "react-redux";
import { GET_OPTIONS, upcomingMovieUrl } from "../utils/constants";
import { addUpcomingMovie } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(upcomingMovieUrl, GET_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addUpcomingMovie(json.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
