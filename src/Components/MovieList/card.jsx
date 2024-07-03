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
      display="flex"
      flexDirection="column"
      justifyContent="space-between" 
      borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
      <Image
        width="100%"
        height="auto"
        borderTopRadius="8px"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      
  
      <Box 
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        
        p="4">
        <Text  fontWeight="bold" fontSize="lg" mb={4}>
          {movie.title}
        </Text>
        <Button
          onClick={handleDetailClick}
          alignSelf="center"
        >
          Detay
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
