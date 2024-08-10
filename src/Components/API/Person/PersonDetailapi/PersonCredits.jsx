import React, { useState } from "react";
import { SimpleGrid, Flex, Image, Text, Box, Heading, Button } from "@chakra-ui/react";

const PersonCredits = ({ credits, navigate }) => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [showMore, setShowMore] = useState(true);

  const handleCreditClick = (cast) => {
    if (cast.title) {
      navigate(`/movies/${cast.id}`);
    } else if (cast.name) {
      navigate(`/tvshows/${cast.id}`);
    }
  };

  const handleShowMoreClick = () => {
    setVisibleCount(prevCount => {
      const newCount = prevCount + 5;
      if (newCount >= credits.cast.length) {
        setShowMore(false);
        return credits.cast.length;
      }
      return newCount;
    });
  };

  return (
    <Box mt={8}>
      <Heading size="lg">Credits-Cast</Heading>
      <SimpleGrid columns={[1, 2, 3,4, 5]} spacing={4}>
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
                mb={4}
              />
            ) : (
              <Text   px={8} py={28} mb={2}>No poster available</Text>
            )}
            <Text fontWeight="bold">{cast.title || cast.name}</Text>
            <Text fontWeight="200" fontStyle="italic">{cast.character}</Text>
            <Text>{cast.release_date}</Text>
            <Text noOfLines={3}>{cast.overview ? cast.overview : "No overview available"}</Text>
          </Flex>
        ))}
      </SimpleGrid>
      {showMore && (
        <Button mt={4} onClick={handleShowMoreClick} colorScheme="teal">
          Show More
        </Button>
      )}
    </Box>
  );
};

export default PersonCredits;
