import React from "react";
import MovieDetailapi from "../../Components/API/Movie/MovieDetailapi";
import { Container } from "@chakra-ui/react";

const MoviesDetail = () => {
  return (
    <Container
      maxW={{
        sm:"container.sm",
        md: "container.md",
        lg: "container.md",
        xl: "container.lg",
      }}
    >
      <MovieDetailapi />
    </Container>
  );
};
export default MoviesDetail;
