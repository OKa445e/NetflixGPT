import React, { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import {popularMovieVideo} from "../utils/movieSlice";

// this hook fetch data from tmdb api(popular movie) and put into movieslice store.
const useMoviePopular = () => {
  const dispatch = useDispatch();
  const moviePlaying = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      );
      const json = await data.json();
      dispatch(popularMovieVideo(json.results));
    } catch (err) {
      ("there is error: ", err);
    }
  };
  useEffect(() => {
    moviePlaying();
  }, []);
};

export default useMoviePopular;
