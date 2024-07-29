import React from "react";
import TvShowDetailapi from "../../Components/API/TvShow/TvShowDetailapi";

const TvShowsDetail = () => {
  return (
    <Container
    maxW={{
      base: "container.sm",
      md: "container.md",
      lg: "container.lg",
      xl: "container.xl",
    }}
  >
    <TvShowDetailapi />
  </Container>
  );
};
export default TvShowsDetail;