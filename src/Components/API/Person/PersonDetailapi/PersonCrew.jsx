import React, { useState } from "react";
import {
  SimpleGrid,
  Flex,
  Box,
  Text,
  Button,
  Image,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PersonCrew = ({ credits }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const navigate = useNavigate();

  const handleCreditClick = (crew) => {
    if (crew.title) {
      navigate(`/movies/${crew.id}`);
    } else if (crew.name) {
      navigate(`/tvshows/${crew.id}`);
    }
  };

  const handleShowMoreClick = () => {
    setVisibleCount((prevCount) => {
      const newCount = prevCount + 6;
      return Math.min(newCount, credits.crew.length); // Ensure not exceeding total length
    });
  };

  return (
    <Box mt={8}>
      <Heading>Credits-Crew</Heading>
      <SimpleGrid columns={[2, 3, 4, 5, 6]} spacing={4}>
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
            _hover={{ bg: "gray.700" }}
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
              <Text px={8} py={20} mb={2}>
                No poster available
              </Text>
            )}
            <Text fontWeight="bold" mb={2}>
              {crew.title || crew.name}
            </Text>
            <Text fontSize="sm" color="gray.500">
              Department: {crew.department ? crew.department : "Unknown"}
              <br />
              Job: {crew.job}
              <Text fontSize="sm" noOfLines={3}>
                {crew.overview ? crew.overview : "No overview available"}
              </Text>
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
      {credits.crew.length > 6 && visibleCount < credits.crew.length && (
        <Button mt={4} onClick={handleShowMoreClick} colorScheme="teal">
          Show More
        </Button>
      )}
    </Box>
  );
};

export default PersonCrew;
