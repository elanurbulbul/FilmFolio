import React from 'react';
import { Box, Badge, Heading, Flex } from '@chakra-ui/react';

const GenreList = ({ genres }) => (
  <Box p={4} borderRadius="md">
    <Heading as="h2" size="lg" mb={2}>
      Genres
    </Heading>
    <Flex wrap="wrap" justify="center" gap={2}>
      {genres.map((genre) => (
        <Badge key={genre.id} colorScheme="blue" m={1}>
          {genre.name}
        </Badge>
      ))}
    </Flex>
  </Box>
);

export default GenreList;
