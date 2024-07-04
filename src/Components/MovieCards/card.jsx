import React from "react";
import { Box, Image, Text, Button, Stack, Flex, Tooltip } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import { StarIcon } from "@chakra-ui/icons";

const Card = ({ movie }) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  const releaseYear = format(new Date(movie.release_date), 'yyyy');
  
  return (
    <Box 
      display="flex"
      flexDirection="column"
      justifyContent="space-between" 
      borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
      <Image
        width="100%"
        borderTopRadius="8px"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      
      <Box 
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        p="4">
        <Tooltip label={movie.title} aria-label="Title Tooltip">
          <Text  
            fontWeight="bold" 
            fontSize="lg" 
            mb={4} 
            overflow="hidden" 
            textOverflow="ellipsis" 
            whiteSpace="nowrap">
            {movie.title}
          </Text>
        </Tooltip>
        <Flex justify="space-between" mb={3} >
          <Stack spacing={1}>
            <Text fontSize="md">{releaseYear}</Text>
          </Stack>
          <Stack display="flex" direction="row" spacing={1} >
            <Tooltip label={`${movie.vote_average.toFixed(2)} / 10`} aria-label="Rating Tooltip">
              <Flex align="center">
                <StarIcon color="yellow.400" boxSize="1rem" />
                <Text fontSize="md" ml={1}>{movie.vote_average.toFixed(2)}</Text>
              </Flex>
            </Tooltip>
          </Stack>
        </Flex>
       
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
