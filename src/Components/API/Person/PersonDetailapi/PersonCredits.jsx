import React from "react";
import { SimpleGrid, Flex, Image, Text, Box, Heading } from "@chakra-ui/react";

const PersonCredits = ({ credits, navigate }) => {
  const handleCreditClick = (cast) => {
    if (cast.title) {
      navigate(`/movies/${cast.id}`);
    } else if (cast.name) {
      navigate(`/tvshows/${cast.id}`);
    }
  };

  return (
    <Box mt={8}>
      <Heading size="lg">Credits</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} mt={4} spacing={4}>
        {credits.cast.map((cast, index) => (
          <Flex
            align="center"
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
                boxSize="200px"
                src={`https://image.tmdb.org/t/p/w500${cast.poster_path}`}
                alt={cast.title || cast.name}
                mb={2}
              />
            ) : (
              <Text border="1px" px={8} py={20} mb={2}>No photo available</Text>
            )}
            <Text fontWeight="bold">{cast.title || cast.name}</Text>
            <Text>{cast.character}</Text>
            <Text>{cast.release_date}</Text>
            <Text noOfLines={3}>{cast.overview ? cast.overview : "No overview available"}</Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PersonCredits;
