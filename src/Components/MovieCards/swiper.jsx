import React, { useRef, useState, useEffect } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Card from './card';

const SwiperComponent = ({ initialMovieList }) => {
  const [movieList, setMovieList] = useState(initialMovieList);
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(movieList.length);
  const prependNumber = useRef(1);

  useEffect(() => {
    setMovieList(initialMovieList);
  }, [initialMovieList]);

  const prepend = () => {
    const newSlides = [
      ...movieList.slice(prependNumber.current - 2, prependNumber.current),
      ...movieList,
    ];
    prependNumber.current -= 2;
    setMovieList(newSlides);
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    const newSlides = [
      ...movieList,
      ...movieList.slice(0, 2).map((_, i) => ({ ...movieList[i], id: appendNumber.current++ }))
    ];
    setMovieList(newSlides);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={5}
        initialSlide={0} // Start from the first slide
        spaceBetween={30}
        
        navigation={true}
        loop={true} // Enable continuous loop mode
        virtual
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {movieList.map((movie, index) => (
          <SwiperSlide key={movie.id} virtualIndex={index}>
            <Card movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperComponent;
