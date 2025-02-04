import { useDispatch, useSelector } from "react-redux";
import { GET_OPTIONS, PopularMovieUrl } from "../utils/constants";
import { addPopularMovie } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const PopularMovies = useSelector((store) => store.movie.PopularMovie);
  const getPopularMovies = async () => {
    const data = await fetch(PopularMovieUrl, GET_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovie(json.results));
  };
  useEffect(() => {
    !PopularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
