import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Card = ({ movie }) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p="4"
      m="2"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      align="center"
    >
      <Box>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          borderRadius="md"
          mb="2"
        />
        <Text fontWeight="bold" fontSize="lg" mb={3}>
          {movie.title}
        </Text>
      </Box>
      <Button onClick={handleDetailClick} alignSelf="center">
        Detay
      </Button>
    </Box>
  );
};

export default Card;
