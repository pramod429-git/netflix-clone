import { createSlice } from "@reduxjs/toolkit";

const languageGptSearchSlice = createSlice({
  name: "gptSearchLang",
  initialState: {
    gptLanguage: "english",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.gptLanguage = action.payload;
    },
  },
});

export default languageGptSearchSlice.reducer;

export const { changeLanguage } = languageGptSearchSlice.actions;
