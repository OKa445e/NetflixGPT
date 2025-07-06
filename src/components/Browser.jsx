import useMoviePlaying from "../hooks/useMoviePlaying";
import useMovieUpcoming from "../hooks/useMovieUpcoming";
import useMoviePopular from "../hooks/useMoviePopular";
import useMovieTop from "../hooks/useMovieTop";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./gptSearch";

import { useSelector } from "react-redux";

const Browser = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useMoviePlaying();
  useMovieUpcoming();
  useMoviePopular();
  useMovieTop();
  return (
    <div>
      <Header />
      {showGptSearch ? (
      <GptSearch/>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
