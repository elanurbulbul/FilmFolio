import React from "react";
import { Heading } from "@chakra-ui/react";
import PopulerTvShow from "../../Components/API/TvShow/PopulerTv";
import AiringTodayTv from "../../Components/API/TvShow/AiringTodayTv";
import OnTheAirTv from "../../Components/API/TvShow/OnTheAirTv";
import TopRatedTv from "../../Components/API/TvShow/TopRatedTv";

const TvShows = () => {
  return (
    <>
      <Heading>Populer</Heading>
      <PopulerTvShow />
      <Heading>Airing Today </Heading>
      <AiringTodayTv />
      <Heading> On The Air </Heading>
      <OnTheAirTv />
      <Heading>Top Rated </Heading>
      <TopRatedTv />
    </>
  );
};
export default TvShows;
