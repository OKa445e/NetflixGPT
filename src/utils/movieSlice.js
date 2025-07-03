import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
      moviePlaying: null,
      trailerVideo: null,
    },
    reducers: {
        currentlyMoviePlaying: (state,action) => {
            state.moviePlaying = action.payload;
        },
        addTrailerVideo: (state,action) => {
            state.trailerVideo = action.payload;
        },
    },

});

export const {currentlyMoviePlaying,addTrailerVideo} = moviesSlice.actions;

export default moviesSlice.reducer;