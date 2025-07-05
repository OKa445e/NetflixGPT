import React, { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import {topMovieVideo} from "../utils/movieSlice";

// this hook fetch data from tmdb api(top) and put into movieslice store.
const useMovieTop = () => {
  const dispatch = useDispatch();
  const moviePlaying = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      );
      const json = await data.json();
      dispatch(topMovieVideo(json.results));
    } catch (err) {
      console.log("there is error: ", err);
    }
  };
  useEffect(() => {
    moviePlaying();
  }, []);
};

export default useMovieTop;
