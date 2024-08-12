import React, { useState } from "react";
import { SimpleGrid, Flex, Image, Text, Box, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

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
      return Math.min(newCount, credits.cast.length); // Ensure not exceeding total length
    });
  };

  return (
    <Box mt={8} >
      <Heading textAlign="start" fontSize="30px">Credits (Cast)</Heading>
      <Text textAlign="start" my={3}>Many movies and TV series she/he worked in as an actor</Text>
      <SimpleGrid columns={[2, 3, 4, 5, 6]} spacing={4}>
        {credits.cast.slice(0, visibleCount).map((cast, index) => (
          <Flex
            align="center"
            justifyContent="space-between"
            direction="column"
            textAlign="center"
            key={index}
            p={4}
            borderWidth={1}
            borderRadius="lg"
            onClick={() => handleCreditClick(cast)}
            cursor="pointer"
            _hover={{ bg: "gray.500" }}
          >
            {cast.poster_path ? (
              <Image
                borderRadius="md"
                width="100%"
                height="auto"
                maxWidth="200px"
                aspectRatio="4/5"
                src={`https://image.tmdb.org/t/p/w500${cast.poster_path}`}
                alt={cast.title || cast.name}
              />
            ) : (
              <Text px={8} py="14" mb={2}>No poster available</Text>
            )}
            <Text fontWeight="bold" noOfLines={2}>{cast.title || cast.name}</Text>
            <Text fontWeight="200" fontStyle="italic">{cast.character}</Text>
            <Text>{cast.release_date}</Text>
            <Text noOfLines={3}>{cast.overview ? cast.overview : "No overview available"}</Text>
          </Flex>
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
