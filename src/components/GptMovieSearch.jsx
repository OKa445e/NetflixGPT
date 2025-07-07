import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import MovieList from "./MovieList";

const GptMovieSearch = () => {
  const { movieResults, movieNames, loading } = useSelector(
    (store) => store.gpt
  );

  if (loading) {
    return (
      <div className="p-4 m-4 bg-black/70 text-white bg-opacity-70">
        <Loader />
      </div>
    );
  }

  if (!movieResults || !movieNames) {
    return null;
  }

  if (movieResults.length === 0 || movieNames.length === 0) {
    return <div className="text-center text-white">No results found.</div>;
  }

  return (
    <div className="p-4 m-4 bg-black/70 text-white bg-opacity-70">
      <div>
        {movieNames.map((name, index) => (
          <MovieList key={name} title={name} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSearch;
