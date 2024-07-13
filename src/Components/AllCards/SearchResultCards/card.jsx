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
    >
      <Image
        width="100%"
        borderTopRadius="8px"
        src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.profile_path}`}
        alt={item.name || item.title}
      />
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
        <Button onClick={handleDetailClick} alignSelf="center">
          Details
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
