import React from "react";
import { Box, Image } from "@chakra-ui/react";

const MoviePoster = ({ posterPath, title }) => {
  return (
    <Box marginRight={2} alignSelf="center">
      <Image
        width="100%"
        height="auto"
        maxWidth="288px"
        aspectRatio="3/4"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        borderRadius="md"
      />
    </Box>
  );
};

export default MoviePoster;
