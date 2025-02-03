import React from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.gptSearchLang.gptLanguage);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12">
        <input
          className="px-10 m-2 col-span-9"
          type="text"
          placeholder={language[langKey].gptPlaceHolder}
        />
        <button className="px-10 m-2 py-3 bg-red-700 text-white col-span-3 rounded-lg">
          {language[langKey].gptSearch}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
