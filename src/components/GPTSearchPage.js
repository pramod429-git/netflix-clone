import React from "react";
import GptSearchBar from "./GptSearchBar";
import GprtSearchMovieSuggesion from "./GprtSearchMovieSuggesion";
import { BG_LOGO_Url } from "../utils/constants";

const GPTSearch = () => {
  console.log("gpt page");
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_LOGO_Url} alt="logo" />
      </div>
      <GptSearchBar />
      <GprtSearchMovieSuggesion />
    </div>
  );
};

export default GPTSearch;
