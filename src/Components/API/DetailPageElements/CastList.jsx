import React from 'react';
import { Box, Flex, Image, Text, Heading } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const CastList = ({ cast }) => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/people/${id}`);
  };

  return (
    <Box mb={8} py={4} >
      <Text textAlign="start" fontWeight="600" fontSize="25px" mb={4}>
        Cast
      </Text>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Pagination]}
        navigation
        style={{ width: '100%' }}
      >
        {cast.map((castMember) => (
          <SwiperSlide key={castMember.id}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between" 
              borderWidth="1px" 
              borderRadius="lg" 
              boxShadow="md"
              onClick={() => handleNavigate(castMember.id)}
              cursor="pointer"
              transition="transform 0.2s" 
            >
              <Image

                width="100%"
                height="auto"
                mb={2}
                borderWidth="2px"
                borderColor="gray.200"
                aspectRatio={4 / 5}
                borderTopRadius="8px"
                src={`https://image.tmdb.org/t/p/w200${castMember.profile_path}`}                
              />                           
              <Text
                fontWeight="bold"
                fontSize="md"
                noOfLines={1}
                overflow="hidden"
                textOverflow="ellipsis"
                mb={2}
              >
                {castMember.name}
              </Text>
              <Text
                fontSize="sm"
                noOfLines={1}
                overflow="hidden"
                textOverflow="ellipsis"
                color="gray.600"
                mb={2}
              >
                {castMember.character}
              </Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CastList;
