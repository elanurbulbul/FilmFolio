import React, { useEffect, useState } from "react";
import { Box, Container, Spinner, Center } from "@chakra-ui/react";
import PopulerMovie from "../../Components/API/Movie/PopulerMovie";
import NowPlayingMovie from "../../Components/API/Movie/NowPlayingMovie";
import TopRatedMovie from "../../Components/API/Movie/TopRatedMovie";
import UpComingMovie from "../../Components/API/Movie/UpComingMovie";
import Header from "./header";

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [allDataLoaded, setAllDataLoaded] = useState({
    popular: true,
    nowPlaying: true,
    upcoming: true,
    topRated: true,
  });

  const handleDataLoaded = (key) => {
    setAllDataLoaded((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  useEffect(() => {
    const allLoaded = Object.values(allDataLoaded).every((loaded) => loaded);
    if (allLoaded) {
      setLoading(false);
    }
  }, [allDataLoaded]);

  return (
    
    <Container maxW={{ base: 'container.sm', md: "container.lg", lg: "container.lg", xl: "container.xl" }}>
      {loading ? (
         <Center height="100vh">
         <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="gray.400" size="xl" />
       </Center>
      ) : (
        <Box my={10}>
          <Header/>
          <PopulerMovie onDataLoaded={() => handleDataLoaded("popular")} />
          <NowPlayingMovie onDataLoaded={() => handleDataLoaded("nowPlaying")} />
          <UpComingMovie onDataLoaded={() => handleDataLoaded("upcoming")} />
          <TopRatedMovie onDataLoaded={() => handleDataLoaded("topRated")} />
        </Box>
      )}
    </Container>
  );
};

export default Movies;
