import React from 'react';
import { Text, AspectRatio, Box, Card, useBreakpointValue, SimpleGrid } from '@chakra-ui/react';

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
      <Text textAlign="start" fontWeight="600" fontSize="30px" mb={4}>
        Scenes and Other Trailers
      </Text>

      <SimpleGrid columns={{ md: 2, lg: 3 }} spacing={3}>
        {videos.slice(0, 3).map((video) => (
          <Card
            key={video.id}
            p={5}
            borderRadius="md"
            boxShadow="sm"
            aspectRatio="16/9"
            width="100%"
            height="auto"
            textAlign="center"
            backgroundPosition="center"
            backgroundSize="cover"
            className="video-slide"
          >
            <Text
              fontSize={fontSize}
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
                  }}
                />
              </AspectRatio>
            )}
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default VideoList;
