import React from "react";
import MovieDetailapi from "../../Components/API/Movie/MovieDetailapi";
import { Container } from "@chakra-ui/react";

const MoviesDetail = () => {
  return (
    <Container
      maxW={{
        base: "container.sm",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
      }}
    >
      <MovieDetailapi />
    </Container>
  );
};
export default MoviesDetail;
