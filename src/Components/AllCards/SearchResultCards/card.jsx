import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Card = ({ item, mediaType }) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    if (mediaType === "movie") {
      navigate(`/movies/${item.id}`);
    } else if (mediaType === "tv") {
      navigate(`/tvshows/${item.id}`);
    } else if (mediaType === "person") {
      navigate(`/people/${item.id}`);
    }
  };

  const imagePath = item.poster_path || item.profile_path;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      mb={4}
      p={4}
      width="100%"
      onClick={handleDetailClick}
      cursor="pointer"
      transition="transform 0.2s"
      _hover={{ 
        transform: "scale(1.05)",
      }}
    >
      {imagePath ? (
        <Image
          width="100%"
          borderTopRadius="8px"
          src={`https://image.tmdb.org/t/p/w500${imagePath}`}
          alt={item.name || item.title}
        />
      ) : (
        <Box
          width="100%"
          height="350px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="gray.300"
          borderTopRadius="8px"
        >
          <Text fontSize="lg" color="gray.600">
            No photo!
          </Text>
        </Box>
      )}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        p="4"
      >
        <Text
          fontWeight="bold"
          fontSize="lg"
          mb={1}
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {item.name || item.title}
        </Text>
        <Text mb={3} fontSize="md" as="samp" opacity="0.7">
          {item.media_type}
        </Text>
       
      </Box>
    </Box>
  );
};

export default Card;
