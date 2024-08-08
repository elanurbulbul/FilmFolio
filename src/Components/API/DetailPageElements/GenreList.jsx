import React from 'react';
import { Box, Badge, Heading, Flex } from '@chakra-ui/react';

const GenreList = ({ genres }) => (
  <Box mt={5} >
   
    <Flex wrap="wrap" gap={2}>
      {genres.map((genre) => (
        <Badge key={genre.id} colorScheme="blue" mr={1}>
          {genre.name}
        </Badge>
      ))}
    </Flex>
  </Box>
);

export default GenreList;
