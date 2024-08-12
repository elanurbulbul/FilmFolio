import React from "react";
import { Box, Image } from "@chakra-ui/react";

const MoviePoster = ({ posterPath, title }) => {
  return (
    <Box marginRight={2} >
      <Image
        width="100%"
        height="auto"
        maxHeight="385px"
        maxWidth="288px"
        aspectRatio="3/4"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        borderRadius="lg"
      />
    </Box>
  );
};

export default MoviePoster;
