import React, { useRef, useState, useEffect } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Card from './card';

const SwiperComponent = ({ initialTvList }) => {
  const [tvList, setTvList] = useState(initialTvList || []);
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(tvList.length);
  const prependNumber = useRef(1);

  useEffect(() => {
    setTvList(initialTvList || []);
  }, [initialTvList]);

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={5}
        initialSlide={0}
        spaceBetween={30}
        navigation={true}
        loop={true}
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
        {tvList.map((tv, index) => (
          <SwiperSlide key={tv.id} virtualIndex={index}>
            <Card tv={tv} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperComponent;
