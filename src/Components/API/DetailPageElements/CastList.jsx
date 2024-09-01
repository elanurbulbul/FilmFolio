import React from 'react';
import { Box, Image, Text, Card, Icon } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const CastList = ({ cast }) => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/people/${id}`);
  };

  return (
    <Box mb={8} py={4}>
      <Text textAlign="start" fontWeight="600" fontSize="28px" mb={4}>
        Cast List
      </Text>
      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        modules={[Navigation, Pagination]}
        navigation
        style={{ width: '100%' }}
      >
        {cast.map((castMember) => (
          <SwiperSlide style={{ padding: '2px' }} key={castMember.id}>
            <Card
              display="flex"
              flexDirection="column"
              justifyContent={castMember.character ? "space-between" : "center"}  // Eğer character varsa space-between, yoksa center
              borderRadius="8px"
              onClick={() => handleNavigate(castMember.id)}
              cursor="pointer"
              transition="transform 0.2s"
              textAlign="center" // İçeriği ortalamak için
            >
              {castMember.profile_path ? (
                <Image
                  objectFit="cover"
                  width="100%"
                  height="auto"
                  mb={2}
                  borderColor="gray.200"
                  aspectRatio={2 / 3}
                  borderTopRadius="8px"
                  src={`https://image.tmdb.org/t/p/w200${castMember.profile_path}`}
                />
              ) : (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="auto"
                  aspectRatio={2 / 3}
                  backgroundColor="gray.200"
                  borderTopRadius="8px"
                  mb={2}
                >
                  <Icon as={FaUserAlt} boxSize="50px" color="gray.500" />
                </Box>
              )}
              <Text
                fontWeight="bold"
                fontSize="md"
                noOfLines={1}
                overflow="hidden"
                textOverflow="ellipsis"
                mb={castMember.character ? {bs:"1",md:"2"} : 0}  // Eğer character yoksa margin-bottom uygulama
              >
                {castMember.name}
              </Text>
              {castMember.character && (
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
              )}
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CastList;
