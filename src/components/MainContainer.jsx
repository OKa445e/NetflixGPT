import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./videoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.moviePlaying);

  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

return (
    <div className="pt-[30%] md:pt-0">
        <VideoTitle title = {original_title} overview = {overview} />
        <VideoBackground id = {id}/>
    </div>
)
};

export default MainContainer;
