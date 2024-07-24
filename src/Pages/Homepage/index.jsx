import React, { useState } from "react";
import { Container } from "@chakra-ui/react";
import MoviesTrending from "../../Components/API/Trending/MoviesTrending/MoviesTrending";
import TvTrending from "../../Components/API/Trending/TvTrending/TvShowsTrending";

const Homepage = () => {
  const [isWeekly, setIsWeekly] = useState(false); // Yeni state
 

 

  const handleToggle = () => {
    setIsWeekly(!isWeekly);
  };

  return (
    <Container  maxW={{base:'container.sm',md:"container.md", lg:"container.lg", xl:"container.xl"}}>
      
     <MoviesTrending/>
     <TvTrending/>
    </Container>
  );
};

export default Homepage;
