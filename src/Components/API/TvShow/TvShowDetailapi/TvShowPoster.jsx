import React from 'react';
import { Image } from '@chakra-ui/react';

const Poster = ({ posterPath, name }) => (
  <Image
    src={`https://image.tmdb.org/t/p/w500${posterPath}`}
    alt={name}
  />
);

export default Poster;
