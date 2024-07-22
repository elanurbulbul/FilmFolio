import React, { useRef, useState, useEffect } from "react";
import { Stack} from "@chakra-ui/react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TvCard from "./card";

const SwiperComponent = ({ initialTvList }) => {
  const [tvList, setTvList] = useState(initialTvList);
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(tvList.length);
  const prependNumber = useRef(1);

  useEffect(() => {
    setTvList(initialTvList);
  }, [initialTvList]);

  const prepend = () => {
    const newSlides = [
      ...tvList.slice(prependNumber.current - 2, prependNumber.current),
      ...tvList,
    ];
    prependNumber.current -= 2;
    setTvList(newSlides);
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    const newSlides = [
      ...tvList,
      ...tvList
        .slice(0, 2)
        .map((_, i) => ({ ...tvList[i], id: appendNumber.current++ })),
    ];
    setTvList(newSlides);
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
        initialSlide={0}
        spaceBetween={20}
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
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {tvList.map((tv, index) => (
          <SwiperSlide key={tv.id} virtualIndex={index}>
            <Stack py="20px">
              <TvCard tv={tv} />
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperComponent;
