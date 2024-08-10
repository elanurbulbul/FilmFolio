import React from 'react';
import { Box, Image, IconButton } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const ProfileImages = ({ images }) => {
  return (
    <Box position="relative" width="100%">
      <Swiper
        spaceBetween={15}
        slidesPerView={2}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 25 },
          1280: { slidesPerView: 5, spaceBetween: 30 },
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Navigation, Pagination]}
        style={{ width: '100%', padding: '20px 0' }}
      >
        {images.profiles.map((image) => (
          <SwiperSlide key={image.file_path}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
              alt="Profile"
              objectFit="cover"
              width="100%"
              height="auto"
              maxWidth="350px"
              aspectRatio="2/3"
              borderRadius="md"
            />
          </SwiperSlide>
        ))}
        <Box
          className="swiper-button-prev"
          position="absolute"
          top="50%"
          left="10px"
          transform="translateY(-50%)"
          zIndex="10"
          display="none"
        >
          <IconButton
            icon={<ChevronLeftIcon />}
            aria-label="Previous Slide"
            size="lg"
            fontSize="2xl" 
            variant="outline"
          />
        </Box>
        <Box
          className="swiper-button-next"
          position="absolute"
          top="50%"
          right="10px"
          transform="translateY(-50%)"
          zIndex="10"
          display="none" 
        >
          <IconButton
            icon={<ChevronRightIcon />}
            aria-label="Next Slide"
            size="lg"
            fontSize="2xl" 
            variant="outline"
          />
        </Box>
      </Swiper>
      <Box
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        zIndex="10"
      >
        <IconButton
          icon={<ChevronLeftIcon />}
          aria-label="Previous Slide"
          size="lg"
          fontSize="2xl"
          variant="outline"
          onClick={() => document.querySelector('.swiper-button-prev').click()}
        />
      </Box>
      <Box
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        zIndex="10"
      >
        <IconButton
          icon={<ChevronRightIcon />}
          aria-label="Next Slide"
          size="lg"
          fontSize="2xl" 
          variant="outline"
          onClick={() => document.querySelector('.swiper-button-next').click()}
        />
      </Box>
    </Box>
  );
};

export default ProfileImages;
