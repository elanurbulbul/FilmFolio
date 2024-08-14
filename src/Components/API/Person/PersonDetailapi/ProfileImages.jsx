import React from "react";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProfileImages = ({ images }) => {
  const showSwiper = images.profiles.length > 3;

  return (
    <Box position="relative" width="100%">
      {showSwiper ? (
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
          navigation
          modules={[Navigation, Pagination]}
          style={{ width: "100%", padding: "5px 0" }}
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
        </Swiper>
      ) : (
        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
          spacing={4}
          py={2}
        >
          {images.profiles.map((image) => (
            <Image
              key={image.file_path}
              src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
              alt="Profile"
              objectFit="cover"
              width="100%"
              height="auto"
              maxWidth="350px"
              aspectRatio="2/3"
              borderRadius="md"
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default ProfileImages;
