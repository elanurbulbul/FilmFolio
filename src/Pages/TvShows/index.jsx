import React, { useEffect, useState } from "react";
import { Heading, Container, Spinner, Center } from "@chakra-ui/react";
import PopulerTvShow from "../../Components/API/TvShow/PopulerTv";
import AiringTodayTv from "../../Components/API/TvShow/AiringTodayTv";
import OnTheAirTv from "../../Components/API/TvShow/OnTheAirTv";
import TopRatedTv from "../../Components/API/TvShow/TopRatedTv";

const TvShows = () => {
  const [loading, setLoading] = useState(true);
  const [allDataLoaded, setAllDataLoaded] = useState({
    popular: true,
    airingToday: true,
    onTheAir: true,
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
        <>
          <PopulerTvShow onDataLoaded={() => handleDataLoaded("popular")} />
          <AiringTodayTv onDataLoaded={() => handleDataLoaded("airingToday")} />
          <OnTheAirTv onDataLoaded={() => handleDataLoaded("onTheAir")} />
          <TopRatedTv onDataLoaded={() => handleDataLoaded("topRated")} />
        </>
      )}
    </Container>
  );
};

export default TvShows;
