import React from "react";
import PopulerMovie from "../../Components/API/Movie/PopulerMovie";
import { Container, Heading } from "@chakra-ui/react";
import NowPlayingMovie from "../../Components/API/Movie/NowPlayingMovie";
import TopRatedMovie from "../../Components/API/Movie/TopRatedMovie";
import UpComingMovie from "../../Components/API/Movie/UpComingMovie";

const Movies = () => {
  return (
    <Container  maxW={{base:'container.sm',md:"container.md", lg:"container.lg", xl:"container.xl"}}>
    <Heading>Populer movie</Heading>
      <PopulerMovie/>
      <Heading>Now Playing movie</Heading>
      <NowPlayingMovie/>
      <Heading>Top Rated movie</Heading>
      <TopRatedMovie/>
      <Heading>Up Coming movie</Heading>
      <UpComingMovie/>
    </Container>
   
  );
};
export default Movies;