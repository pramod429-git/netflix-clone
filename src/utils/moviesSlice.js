import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    NowPlayingMovie: null,
    Trailer: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.NowPlayingMovie = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.Trailer = action.payload;
    },
  },
});

export const { addNowPlayingMovie, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;
