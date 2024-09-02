import React from "react";
import { Box, Image,Icon } from "@chakra-ui/react";
import { FaPhotoFilm } from "react-icons/fa6";

const MoviePoster = ({ posterPath, title }) => {
  const placeholderThumbnail = 'https://via.placeholder.com/640x360.png?text=';

  return (
    <Box marginRight={2} alignSelf="center" >
      {posterPath ? (
        <>
           <Image
        width="100%"
        height="auto"
        maxWidth="240px"
        aspectRatio="2/3"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        borderRadius="lg"
      />
         
          
        </>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderColor="gray.700"
          aspectRatio="2/3"
          width="100%"
          maxWidth="240px"
          height="auto"
          borderRadius="lg"
          position="relative"

        >
          <Image
            width="100%"
            height="100%"
            objectFit="cover"
            borderRadius="lg"
            src={placeholderThumbnail}
            alt="No Poster Available"

          />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="gray.500"
            fontSize="50px"
          >
            <Icon as={FaPhotoFilm} />
          </Box>
        </Box>
      )}
     
    </Box>
  );
};

export default MoviePoster;
