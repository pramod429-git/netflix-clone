import React, { useRef } from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
//import openai from "../utils/openai";
import genAI from "../utils/gemini";
import { GET_OPTIONS } from "../utils/constants";
import { addGptSearchMovies, addShimmerEffect } from "../utils/gptSearchSlice";
import Shimmer from "./Shimmer";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.gptSearch.isLoading);
  const langKey = useSelector((store) => store.gptSearchLang.gptLanguage);
  const searchGptText = useRef(null);
  const searchGptTmdbMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      GET_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearchGpt = async () => {
    dispatch(addShimmerEffect(true));
    // const qurey = `act as a movie recommendation system and suggest some movies for the query: ${searchGptText.current.value} only give me names of 5 movies, coma seperated like the result gives head. example results: gadar,sholay,don,golmaal,koi mil gaya`;
    // const gptResult = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: qurey }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResult.choices);
    try {
      const query = `Suggest 5 popular movies based on the theme: ${searchGptText.current.value}. Only return the names in a comma-separated format. Example: Inception, Titanic, Avatar, Gladiator, Interstellar.`;

      const model = genAI.getGenerativeModel({
        model: "gemini-pro",
        //Gemini API allows safety settings. Try relaxing them slightly.
        //Note: Be careful when adjusting safety settings, as this can allow unsafe responses.
        safetySettings: [
          { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_NONE",
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_NONE",
          },
          { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
          {
            category: "HARM_CATEGORY_CIVIC_INTEGRITY",
            threshold: "BLOCK_NONE",
          },
        ],
      }); //initialising gemini model
      const result = await model.generateContent(query); //we are asking query with gemini ai
      console.log(result);
      const gptSearchName = await result.response.text(); // response frpm gemini ai

      console.log(gptSearchName); // Output: List of movies in a comma-separated format

      const gptSearchNameArray = gptSearchName.split(", ");
      console.log(gptSearchNameArray);

      const data = gptSearchNameArray.map((movie) => searchGptTmdbMovie(movie));
      console.log(data);
      const gptSearchNameResult = await Promise.all(data);

      console.log(gptSearchNameResult);

      dispatch(
        addGptSearchMovies({
          searchName: gptSearchNameArray, //by responce from gemini api
          searchResult: gptSearchNameResult, // by responce from TMDB api
        })
      );
    } catch (error) {
      console.error("Gemini API Error:", error);
    }
    dispatch(addShimmerEffect(false));
  };

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchGptText}
          className="px-10 m-2 col-span-9"
          type="text"
          placeholder={language[langKey].gptPlaceHolder}
        />
        <button
          onClick={handleSearchGpt}
          className="px-10 m-2 py-3 bg-red-700 text-white col-span-3 rounded-lg hover:scale-110 group-hover:shadow-2xl transition-transform duration-300 ease-in-out"
        >
          {language[langKey].gptSearch}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
