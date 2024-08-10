import React from 'react';
import { Stack, Text, AspectRatio, Box, useBreakpointValue } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './index.scss'; // Ensure this CSS file is available and imported

import { EffectCoverflow, Pagination } from 'swiper/modules';

const VideoList = ({ videos }) => {
  if (!videos || videos.length === 0) {
    return (
      <Text textAlign="start" fontSize="18px">
        No videos available.
      </Text>
    );
  }

  const fontSize = useBreakpointValue({ base: '14px', md: '18px' });

  return (
    <Box mb={8} py={4} borderRadius="md">
      <Text textAlign="start" fontWeight="600" fontSize="25px" mb={4}>
        Videos
      </Text>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="VideosSwiper"
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
          <Box
            p={5} 
            m="auto" 
            borderWidth="1px"
            borderRadius="md"
            boxShadow="sm"
            textAlign="center"
            height="auto"
            aspectRatio="4/3"
            backgroundPosition='center'
            backgroundSize='cover'
            width='100%'
            className="video-slide"
          >
            <Text
              fontSize={fontSize}
              fontWeight="500"
              mb={2}
              maxWidth="280px"
              title={video.name}
            >
              {video.name} - {video.type}
            </Text>
            {video.site === 'YouTube' && (
              <AspectRatio ratio={16 / 9} width="100%">
                <iframe
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title={video.name}
                  allowFullScreen
                  style={{
                    border: 0,
                    borderRadius: '8px',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </AspectRatio>
            )}
          </Box>
        </SwiperSlide>
        
        ))}
      </Swiper>
    </Box>
  );
};

export default VideoList;
