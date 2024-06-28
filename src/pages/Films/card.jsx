import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const Card = ({ movie }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p="4"
      m="2"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        borderRadius="md"
        mb="2"
      />
      <Text fontWeight="bold" fontSize="lg">
        {movie.title}
      </Text>
    </Box>
  );
};

export default Card;
