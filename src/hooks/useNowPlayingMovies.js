import { useDispatch, useSelector } from "react-redux";
import { GET_OPTIONS, MainMurl } from "../utils/constants";
import { addNowPlayingMovie } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const NowPlayingMovies = useSelector((store) => store.movie.NowPlayingMovie);
  const getNowPlayingMovies = async () => {
    const data = await fetch(MainMurl, GET_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovie(json.results));
  };
  useEffect(() => {
    !NowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
