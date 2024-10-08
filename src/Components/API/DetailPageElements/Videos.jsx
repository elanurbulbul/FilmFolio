import React, { useState } from 'react';
import {
  Box,
  Text,
  AspectRatio,
  Card,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';

const VideoList = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    onOpen();
  };

  if (!videos || videos.length === 0) {
    return (
      <Text textAlign="start" fontSize="18px">
        No videos available.
      </Text>
    );
  }

  return (
    <Box mb={8} py={4}>
      <Text textAlign="start" fontWeight="600" fontSize="28px" mb={3}>
        Teasers and Scenes 
      </Text>

      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={{
          480: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation, Pagination]}
        navigation
        style={{ width: '100%' }}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <Card
              p={3}
              borderRadius="md"
              boxShadow="sm"
              aspectRatio="16/9"
              width="100%"
              height="auto"
              textAlign="center"
              backgroundPosition="center"
              backgroundSize="cover"
              onClick={() => handleVideoClick(video)}
              cursor="pointer"
            >
              <Text
                fontSize="18px"
                fontWeight="500"
                mb={2}
                px={4}
                maxWidth="350px"
                title={video.name}
                isTruncated
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
                      pointerEvents: 'none', 
                    }}
                  />
                </AspectRatio>
              )}
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedVideo?.name}</ModalHeader>
          <ModalBody>
            {selectedVideo && selectedVideo.site === 'YouTube' && (
              <AspectRatio ratio={16 / 9} width="100%">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.key}`}
                  title={selectedVideo.name}
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
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default VideoList;
