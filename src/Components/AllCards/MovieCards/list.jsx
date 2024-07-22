import React from 'react';
import SwiperComponent from './swiper';

const MovieList = ({ movieList }) => {
  return <SwiperComponent initialMovieList={movieList} />;
};

export default MovieList;
