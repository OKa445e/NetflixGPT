import React, { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import {upcomingMovieVideo} from "../utils/movieSlice";

// this hook fetch data from tmdb api(upcoming) and put into movieslice store.
const useMovieUpcoming = () => {
  const dispatch = useDispatch();
  const moviePlaying = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        options
      );
      const json = await data.json();
      dispatch(upcomingMovieVideo(json.results));
    } catch (err) {
      console.log("there is error: ", err);
    }
  };
  useEffect(() => {
    moviePlaying();
  }, []);
};

export default useMovieUpcoming;
