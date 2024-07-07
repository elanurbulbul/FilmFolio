import React from "react";
import PopulerTvShow from "../../Components/API/TvShow/PopulerTv";
import AiringTodayTv from "../../Components/API/TvShow/AiringTodayTv"
const TvShows = () => {
  return (
   <>
   <PopulerTvShow/>
   <AiringTodayTv/>
   </>
  );
};
export default TvShows;