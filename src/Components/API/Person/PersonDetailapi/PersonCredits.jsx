import React, { useState } from "react";
import {
  SimpleGrid,
  Flex,
  Image,
  Text,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaPhotoFilm } from "react-icons/fa6";

const PersonCredits = ({ credits }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const navigate = useNavigate(); // Initialize navigate

  const handleCreditClick = (cast) => {
    if (cast.title) {
      navigate(`/movies/${cast.id}`);
    } else if (cast.name) {
      navigate(`/tvshows/${cast.id}`);
    }
  };

  const handleShowMoreClick = () => {
    setVisibleCount((prevCount) => {
      const newCount = prevCount + 6;
      return Math.min(newCount, credits.cast.length); 
    });
  };

  return (
    <Box mt={8}>
      <Heading textAlign="start" fontSize="30px">
        Credits (Cast)
      </Heading>
      <Text textAlign="start" my={3}>
        Many movies and TV series she/he worked in as an actor
      </Text>
      <SimpleGrid columns={[2, 3, 4, 5, 6]} spacing={4}>
        {credits.cast.slice(0, visibleCount).map((cast, index) => (
          <Box
            key={cast.id || index}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignContent="center"
            textAlign="center"
            borderWidth={1}
            borderRadius="md"
            onClick={() => handleCreditClick(cast)}
            cursor="pointer"
            _hover={{ bg: "gray.600" }}
          >
            {cast.poster_path ? (
              <Image
                borderTopRadius="md"
                width="100%"
                height="auto"
                maxWidth="200px"
                aspectRatio="2/3"
                src={`https://image.tmdb.org/t/p/w500${cast.poster_path}`}
                alt={cast.title || cast.name}
              />
            ) : (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="auto"
                aspectRatio={2 / 3}
                backgroundColor="gray.400"
                borderRadius="8px"
              >
                <FaPhotoFilm boxSize="50px" color="gray.500" />
              </Box>
            )}
            <Text fontWeight="bold" my={2} px={1} isTruncated>
              {cast.title || cast.name}
            </Text>
            <Text isTruncated px={2} fontWeight="100" mb={1} fontStyle="italic">
              {cast.character}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
      {credits.cast.length > 6 && visibleCount < credits.cast.length && (
        <Button mt={4} onClick={handleShowMoreClick} colorScheme="teal">
          Show More
        </Button>
      )}
    </Box>
  );
};

export default PersonCredits;
