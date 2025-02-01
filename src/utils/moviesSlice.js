import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    NowPlayingMovie: null,
    PopularMovie: null,
    UpcomingMovie: null,
    TopRatedMovie: null,

    Trailer: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.NowPlayingMovie = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.PopularMovie = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.TopRatedMovie = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.UpcomingMovie = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.Trailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovie,
  addTrailerVideo,
  addPopularMovie,
  addTopRatedMovie,
  addUpcomingMovie,
} = moviesSlice.actions;

export default moviesSlice.reducer;
