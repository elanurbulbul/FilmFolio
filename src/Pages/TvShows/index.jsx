import React from "react";
import { Heading,Container } from "@chakra-ui/react";
import PopulerTvShow from "../../Components/API/TvShow/PopulerTv";
import AiringTodayTv from "../../Components/API/TvShow/AiringTodayTv";
import OnTheAirTv from "../../Components/API/TvShow/OnTheAirTv";
import TopRatedTv from "../../Components/API/TvShow/TopRatedTv";

const TvShows = () => {
  return (
    <Container  maxW={{base:'container.sm',md:"container.md", lg:"container.lg", xl:"container.xl"}}>
      <Heading>Populer</Heading>
      <PopulerTvShow />
      <Heading>Airing Today </Heading>
      <AiringTodayTv />
      <Heading> On The Air </Heading>
      <OnTheAirTv />
      <Heading>Top Rated </Heading>
      <TopRatedTv />
    </Container>
  );
};
export default TvShows;
