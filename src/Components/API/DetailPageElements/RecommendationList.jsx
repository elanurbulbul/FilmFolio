import React, { useEffect } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { Link, useLocation } from "react-router-dom";
import { FaPhotoFilm } from "react-icons/fa6";

const RecommendationList = ({ recommendations }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box mt={10}>
      <Text fontWeight="600" fontSize="28px" mb={8} textAlign="start">
        Recommended
      </Text>
      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
        modules={[Navigation, Pagination]}
        navigation
        style={{ width: "100%" }}
      >
        {recommendations.map((recommendation) => {
          const type = recommendation.name ? "tvshows" : "movies";
          const href = `/${type}/${recommendation.id}`;

          return (
            <SwiperSlide style={{ padding: "1px 3px" }} key={recommendation.id}>
              <Box
                as={Link}
                to={href}
                display="flex"
                flexDirection="column"
                alignItems="center"
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="md"
                paddingBottom={4}
                textAlign="center"
                _hover={{ textDecoration: "none" }}
              >
                {recommendation.poster_path ? (
                  <Image
                    aspectRatio="2/3"
                    src={`https://image.tmdb.org/t/p/w500${recommendation.poster_path}`}
                    alt={recommendation.name || recommendation.title}
                    borderTopRadius="md"
                    width="100%"
                    height="auto"
                  />
                ) : (
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    height="auto"
                    aspectRatio={2 / 3}
                    backgroundColor="gray.400"
                    borderRadius="8px"
                  >
                    <FaPhotoFilm boxSize="50px" color="gray.500" />
                  </Box>
                )}

                <Text mt={2} px="3" fontWeight="bold" noOfLines={1}>
                  {recommendation.name || recommendation.title}
                </Text>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default RecommendationList;
