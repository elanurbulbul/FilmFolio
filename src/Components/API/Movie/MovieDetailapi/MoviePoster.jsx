import React from "react";
import { Box, Image } from "@chakra-ui/react";

const MoviePoster = ({ posterPath, title }) => {
  return (
    <Box marginRight={2} >
      <Image
        width="100%"
        height="auto"
        maxWidth="240px"
        aspectRatio="2/3"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        borderRadius="lg"
      />
    </Box>
  );
};

export default MoviePoster;
