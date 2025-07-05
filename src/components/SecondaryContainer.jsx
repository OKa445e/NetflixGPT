import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MovieList title={"Now Playing Movies"} movies={movies.moviePlaying} />
        <MovieList title={"Popular Movies"} movies={movies.popularVideo} />
        <MovieList title={"Top Rated Movies"} movies={movies.topVideo} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingVideo} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
