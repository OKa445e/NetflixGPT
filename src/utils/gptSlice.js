import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null,
        loading: false,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        addGptMovieResult: (state,action) => {
           const {movieNames,movieResults} = action.payload;
           state.movieNames = movieNames;
           state.movieResults = movieResults;
           state.loading = false;
        },
    },

});

export const {toggleGptSearchView,addGptMovieResult, setLoading} = gptSlice.actions;

export default gptSlice.reducer;