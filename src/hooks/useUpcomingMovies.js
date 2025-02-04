import { useDispatch, useSelector } from "react-redux";
import { GET_OPTIONS, upcomingMovieUrl } from "../utils/constants";
import { addUpcomingMovie } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const UpcomingMovies = useSelector((store) => store.movie.UpcomingMovie);
  const getUpcomingMovies = async () => {
    const data = await fetch(upcomingMovieUrl, GET_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addUpcomingMovie(json.results));
  };
  useEffect(() => {
    !UpcomingMovies && getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
