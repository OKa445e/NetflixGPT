import React from "react";
import GptSearchBar from "./gptSearchBar";
import GptMovieSearch from "./gptMovieSearch";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL} alt="Netflix background image" />
      </div>
      <GptSearchBar />
      <GptMovieSearch />
    </div>
  );
};

export default GptSearch;
