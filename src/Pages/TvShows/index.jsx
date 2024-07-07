import React from "react";
import PopulerTvShow from "../../Components/API/TvShow/PopulerTv";
import AiringTodayTv from "../../Components/API/TvShow/AiringTodayTv"
import OnTheAirTv from "../../Components/API/TvShow/OnTheAirTv"

const TvShows = () => {
  return (
   <>
   <PopulerTvShow/>
   <AiringTodayTv/>
   <OnTheAirTv/>
   
   </>
  );
};
export default TvShows;