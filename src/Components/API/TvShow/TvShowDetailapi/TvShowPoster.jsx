import React from 'react';
import { Image,Box } from '@chakra-ui/react';

const Poster = ({ posterPath, name }) => (
  
  <Box marginRight={2} alignSelf="center" >
  <Image
    width="100%"
    height="auto"
    maxWidth="240px"
    aspectRatio="2/3"
    src={`https://image.tmdb.org/t/p/w500${posterPath}`}
    alt={name}
    borderRadius="lg"
  />
</Box>
);

export default Poster;
