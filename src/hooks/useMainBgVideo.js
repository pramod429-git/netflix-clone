import { useDispatch } from "react-redux";
import { GET_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMainBgVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMainMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      GET_OPTIONS
    );
    const json = await data.json();
    console.log(json); // all video object from tmdb api based on id
    const fetch_data = json.results?.filter(
      (video) => video.type === "Trailer"
    );
    console.log(fetch_data); // all video object from tmdb api filtered of trailer
    const trailer = fetch_data.length ? fetch_data[0] : json.results[0];
    console.log(trailer); //trailer video object from tmdb api
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMainMovieVideo();
  }, []);
};

export default useMainBgVideo;
