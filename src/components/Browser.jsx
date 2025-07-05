import useMoviePlaying from "../hooks/useMoviePlaying";
import useMovieUpcoming from "../hooks/useMovieUpcoming";
import useMoviePopular from "../hooks/useMoviePopular";
import useMovieTop from "../hooks/useMovieTop";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browser = () => {
   useMoviePlaying();
   useMovieUpcoming();
   useMoviePopular();
   useMovieTop();
     return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browser;
