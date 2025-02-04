import { useDispatch, useSelector } from "react-redux";
import { GET_OPTIONS, TopRatedMovieUrl } from "../utils/constants";
import { addTopRatedMovie } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const TopRatedMovies = useSelector((store) => store.movie.TopRatedMovie);
  const getTopRatedMovies = async () => {
    const data = await fetch(TopRatedMovieUrl, GET_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopRatedMovie(json.results));
  };
  useEffect(() => {
    !TopRatedMovies && getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
