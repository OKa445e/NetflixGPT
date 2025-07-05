import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviePlaying: null,
    trailerVideo: null,
    popularVideo:null,
    topVideo: null,
    upcomingVideo:null,
  },
  reducers: {
    currentlyMoviePlaying: (state, action) => {
      state.moviePlaying = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    popularMovieVideo: (state, action) => {
      state.popularVideo = action.payload;
    },
    topMovieVideo: (state, action) => {
      state.topVideo = action.payload;
    },
    upcomingMovieVideo: (state, action) => {
      state.upcomingVideo = action.payload;
    },
  },
});

export const {
  currentlyMoviePlaying,
  addTrailerVideo,
  popularMovieVideo,
  topMovieVideo,
  upcomingMovieVideo,
} = moviesSlice.actions;

export default moviesSlice.reducer;