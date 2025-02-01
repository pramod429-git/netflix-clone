import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MoviesCard = ({ posterPath }) => {
  return (
    <div className="w-56 px-2 relative group cursor-pointer ">
      <img
        className=" transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-2xl"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div> */}
    </div>
  );
};

export default MoviesCard;
