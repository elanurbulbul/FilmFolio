import React, { useRef, useState, useEffect } from "react";
import { Box, Image, Text, Flex, Tooltip } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import { StarIcon } from "@chakra-ui/icons";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const textRef = useRef(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDetailClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  const releaseYear = format(new Date(movie.release_date), 'yyyy');

  useEffect(() => {
    if (textRef.current) {
      setIsTooltipVisible(textRef.current.scrollWidth > textRef.current.clientWidth);
    }
  }, [movie.title]);

  return (
    <Box 
      display="flex"
      flexDirection="column"
      justifyContent="space-between" 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      boxShadow="md"
      onClick={handleDetailClick}
      cursor="pointer"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Image
        width="100%"
        height="430px"
        borderTopRadius="8px"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      
      <Box 
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        p="4"
      >
        <Tooltip 
          label={movie.title} 
          aria-label="Title Tooltip"
          isOpen={isTooltipVisible && isHovered}
          hasArrow
        >
          <Text  
            ref={textRef}
            fontWeight="bold" 
            fontSize="lg" 
            mb={4} 
            overflow="hidden" 
            textOverflow="ellipsis" 
            whiteSpace="nowrap"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {movie.title}
          </Text>
        </Tooltip>
        <Flex justify="space-between" mb={3}>
          <Text fontSize="md">{releaseYear}</Text>
          <Tooltip label={`${movie.vote_average.toFixed(2)} / 10`} aria-label="Rating Tooltip">
            <Flex align="center">
              <StarIcon color="yellow.400" boxSize="1rem" />
              <Text fontSize="md" ml={1}>{movie.vote_average.toFixed(2)}</Text>
            </Flex>
          </Tooltip>
        </Flex>
      </Box>
    </Box>
  );
};

export default MovieCard;
