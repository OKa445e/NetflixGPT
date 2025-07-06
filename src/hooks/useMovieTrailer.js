import React, { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch} from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";



const useMovieTrailer = (movieId) => {
      const dispatch = useDispatch();
 const movieBackground = async () => {

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      options
    );
    const json = await data.json();
 

    const filterData = json.results.filter(
      (videos) => videos.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];
   
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    movieBackground();
  }, []);
}

export default useMovieTrailer;