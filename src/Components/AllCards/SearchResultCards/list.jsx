import React from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import Card from "./card"; // `Card` bileşeninin doğru yolunu belirleyin

const SearchList = ({ movies, tvShows, people }) => {
  return (
    <Box p={4}>
      {movies.length > 0 && (
        <Box mb={8}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Movies
          </Text>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4, xl: 5 }} spacing={4}>
            {movies.map((item) => (
              <Card key={item.id} item={item} mediaType="movie" />
            ))}
          </SimpleGrid>
        </Box>
      )}
      {tvShows.length > 0 && (
        <Box mb={8}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            TV Shows
          </Text>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4, xl: 5 }} spacing={4}>
            {tvShows.map((item) => (
              <Card key={item.id} item={item} mediaType="tv" />
            ))}
          </SimpleGrid>
        </Box>
      )}
      {people.length > 0 && (
        <Box mb={8}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            People
          </Text>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4, xl: 5 }} spacing={4}>
            {people.map((item) => (
              <Card key={item.id} item={item} mediaType="person" />
            ))}
          </SimpleGrid>
        </Box>
      )}
      {movies.length === 0 && tvShows.length === 0 && people.length === 0 && (
        <div>No results found.</div>
      )}
    </Box>
  );
};

export default SearchList;
