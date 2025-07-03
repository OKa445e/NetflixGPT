import React, { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import {currentlyMoviePlaying} from "../utils/movieSlice";

// this hook fetch data from tmdb api and put into movieslice store.
const useMoviePlaying = () => {
  const dispatch = useDispatch();
  const moviePlaying = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      );
      const json = await data.json();
      dispatch(currentlyMoviePlaying(json.results));
    } catch (err) {
      console.log("there is error: ", err);
    }
  };
  useEffect(() => {
    moviePlaying();
  }, []);
};

export default useMoviePlaying;
