import React from 'react';
import SwiperComponent from './swiper';

const List = ({ movieList }) => {
  return <SwiperComponent initialMovieList={movieList} />;
};

export default List;
