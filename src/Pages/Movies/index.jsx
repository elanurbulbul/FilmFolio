import React from "react";
import PopulerMovie from "../../Components/API/Movie/PopulerMovie";
import { Box, Container } from "@chakra-ui/react";
import NowPlayingMovie from "../../Components/API/Movie/NowPlayingMovie";
import TopRatedMovie from "../../Components/API/Movie/TopRatedMovie";
import UpComingMovie from "../../Components/API/Movie/UpComingMovie";

const Movies = () => {
  return (
    <Container maxW={{ base: 'container.sm', md: "container.lg", lg: "container.lg", xl: "container.xl" }}>
      <Box my={20}>
        <PopulerMovie />
        <NowPlayingMovie />
        <UpComingMovie />
        <TopRatedMovie />
      </Box>

    </Container>

  );
};
export default Movies;