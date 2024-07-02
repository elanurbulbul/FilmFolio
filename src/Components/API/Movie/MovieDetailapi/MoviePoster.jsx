import React from 'react';
import { Image } from '@chakra-ui/react';

const MoviePoster = ({ posterPath, title }) => (
  <Image
    src={`https://image.tmdb.org/t/p/w500${posterPath}`}
    alt={title}
  />
);

export default MoviePoster;
