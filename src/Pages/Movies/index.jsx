import React from "react";
import PopulerMovie from "../../Components/API/Movie/PopulerMovie";
import { Heading } from "@chakra-ui/react";
import NowPlayingMovie from "../../Components/API/Movie/NowPlayingMovie";

const Movies = () => {
  return (
    <>
    <Heading>Populer movie</Heading>
      <PopulerMovie/>
      <Heading>NowPlaying movie</Heading>
      <NowPlayingMovie/>
    </>
   
  );
};
export default Movies;