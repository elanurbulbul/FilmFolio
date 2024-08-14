import React from "react";
import TvShowDetailapi from "../../Components/API/TvShow/TvShowDetailapi";
import { Container } from "@chakra-ui/react";

const TvShowsDetail = () => {
  return (
    <Container
    maxW={{
      sm:"container.sm",
      md: "container.md",
      lg: "container.md",
      xl: "container.lg",
    }}
  
  >
    <TvShowDetailapi />
  </Container>
  );
};
export default TvShowsDetail;