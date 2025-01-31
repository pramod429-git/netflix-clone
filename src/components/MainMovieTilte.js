import React from "react";
import { FaPlay } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";

const MainMovieTilte = ({ title, overview }) => {
  return (
    <div className="pt-64 absolute w-screen aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="px-12 text-3xl font-bold py-2">{title}</h1>
      <p className="px-12 w-1/4 py-2">{overview}</p>
      <div className="flex">
        <button className="flex items-center bg-white font-bold ml-12 p-2 rounded-lg text-black px-10 m-2 hover:opacity-80 transition duration-300">
          <FaPlay className="mr-2" />
          <span>Play</span>
        </button>
        <button className="items-center flex bg-slate-500 font-bold p-2 rounded-lg text-white px-10 m-2 hover:opacity-80 transition duration-300">
          <CgDanger className="mr-2 w-8 h-8" />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default MainMovieTilte;
