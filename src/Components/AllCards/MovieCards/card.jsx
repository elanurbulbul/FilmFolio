import React, { useRef, useState, useEffect } from "react";
import { Box, Image, Text, Flex, Tooltip, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import { StarIcon } from "@chakra-ui/icons";
import { FaPhotoFilm } from "react-icons/fa6";


const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const textRef = useRef(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Format the release year with error handling
  const releaseYear = (() => {
    try {
      return format(new Date(movie.release_date), 'yyyy');
    } catch {
      return 'Unknown Year';
    }
  })();

  const handleDetailClick = () => {
    navigate(`/movies/${movie.id}`);
  };

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

    >
      {movie.poster_path ? (
        <Image
          objectFit="cover"
          width="100%"
          height="auto"
          mb={2}
          alt={movie.title}
          borderColor="gray.200"
          aspectRatio={2 / 3}
          borderTopRadius="8px"
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        />
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="auto"
          aspectRatio={2 / 3}
          backgroundColor="gray.200"
          borderTopRadius="8px"
          mb={2}
        >
          <Icon as={FaPhotoFilm} boxSize="50px" color="gray.500" />
          </Box>
      )}


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
