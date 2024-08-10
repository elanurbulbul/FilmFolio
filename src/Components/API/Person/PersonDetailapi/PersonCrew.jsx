import React, { useState } from "react";
import {
  SimpleGrid,
  Flex,
  Box,
  Text,
  Button,
  Image,
  Tooltip,
  Heading,
} from "@chakra-ui/react";

const PersonCrew = ({ credits, navigate }) => {
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
          if (newCount >= credits.crew.length) {
            setShowMore(false);
            return credits.crew.length;
          }
          return newCount;
        });
      };
  return (
    <Box mt={8}>
      <Heading>Credits-Crew</Heading>
      <SimpleGrid columns={[1, 2, 3,4,5]} spacing={4}>
        {credits.crew.slice(0, visibleCount).map((crew, index) => (
         <Flex
         align="center"
         justifyContent="space-between"
         direction="column"
         textAlign="center"
         key={index}
         p={4}
         borderWidth={1}
         borderRadius="lg"
         onClick={() => handleCreditClick(crew)}
         cursor="pointer"
         _hover={{ bg: "gray.500" }}
       >
            {crew.poster_path ? (
              <Image
              width="100%"
              height="auto"
              maxWidth="200px"
              aspectRatio="4/5"
                src={`https://image.tmdb.org/t/p/w200${crew.poster_path}`}
                alt={crew.title || crew.name}
                borderRadius="md"
                mb={4}
              />
            ) : (
              <Text px={8} py={28} mb={2}>
                No poster available
              </Text>
            )}
            <Tooltip label={crew.title}>
              <Text fontWeight="bold" isTruncated>
                {crew.title}
              </Text>
            </Tooltip>
            <Text fontSize="sm" color="gray.500">
              Department: {crew.department}
            </Text>
            <Text fontSize="sm" color="gray.500">
              Job: {crew.job}
            </Text>
            <Text fontSize="sm" noOfLines={3}>
              {crew.overview ? crew.overview : "No overview available"}
            </Text>
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

export default PersonCrew;
