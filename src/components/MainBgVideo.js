import { useSelector } from "react-redux";
import useMainBgVideo from "../hooks/useMainBgVideo";

const MainBgVideo = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movie.Trailer);
  console.log(trailerVideo); //trailer video object from redux store

  useMainBgVideo(movieId);
  return (
    <div className=" w-screen">
      <iframe
        className=" w-full aspect-video"
        src={
          "https://www.youtube-nocookie.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        referrerPolicy="no-referrer"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MainBgVideo;
