import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import ai from "../utils/geminiApi";
import { options } from "../utils/constants";
import { addGptMovieResult, setLoading } from "../utils/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const tmdbMovieResults = async (movies) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        encodeURIComponent(movies) +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const geminiQuery =
      "Act as a movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      '. only give name of 5 movies comma separted like the example result. Example: "chocklate","apple","rice"';

    const aiResults = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: geminiQuery,
    });

    if (!aiResults) {
      // error handling will do in future
    }

    const gptMovies = aiResults.text.split(",");
    console.log(gptMovies);

    const promiseValues = gptMovies.map((movies) => tmdbMovieResults(movies));
    const tmdbResult = await Promise.all(promiseValues);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResult}));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={handleGptSearchClick}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 bg-white"
          placeholder={lang[langKey]?.getSearchPlaceHolder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg  hover:cursor-pointer"
          type="submit"
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
// 01:42:00
