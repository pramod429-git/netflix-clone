import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
  name: "gptSearch",
  initialState: {
    toggleSearch: false,
  },
  reducers: {
    showSearchPage: (state) => {
      state.toggleSearch = !state.toggleSearch;
    },
  },
});
export default gptSearch.reducer;
export const { showSearchPage } = gptSearch.actions;
