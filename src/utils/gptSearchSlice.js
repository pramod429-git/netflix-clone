import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
  name: "gptSearch",
  initialState: {
    toggleSearch: false,
    searchResult: [],
    searchName: [],
    isLoading: false,
  },
  reducers: {
    showSearchPage: (state) => {
      state.toggleSearch = !state.toggleSearch;
    },
    addGptSearchMovies: (state, action) => {
      const { searchName, searchResult } = action.payload;
      state.searchName = searchName || [];
      state.searchResult = searchResult || [];
    },
    addShimmerEffect: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
export default gptSearch.reducer;
export const { showSearchPage, addGptSearchMovies, addShimmerEffect } =
  gptSearch.actions;
