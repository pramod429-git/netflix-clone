import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptSearchSlice from "./gptSearchSlice";
import gptSearchLangSlice from "./gptSearchLangSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movie: moviesSlice,
    gptSearch: gptSearchSlice,
    gptSearchLang: gptSearchLangSlice,
  },
});

export default appStore;
