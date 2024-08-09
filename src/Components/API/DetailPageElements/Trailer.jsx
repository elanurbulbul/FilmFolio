import React from "react";
import { Box, Button, Text, Image, Icon, Stack } from "@chakra-ui/react";
import { MdPlayArrow } from "react-icons/md"; // YouTube izleme ikonu

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Trailer = ({ trailer, name, title, posterPath }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const displayName = name || title;
  
  // YouTube video ID'den video önizleme resmini almak için fonksiyon
  const getVideoThumbnail = (videoId) => `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <Box  position="relative" py="0.5"  >
      {trailer ? (
        <>
          <Image  
          
            width="100%"
            height="auto"
            maxWidth="480px"
            aspectRatio="5/4"
            src={getVideoThumbnail(trailer.key)} // Video önizleme resmini göster
            alt="Watch Trailer"
            cursor="pointer"
            onClick={onOpen}
            borderRadius="md"
          />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize="70px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            onClick={onOpen}
          >
            <Icon  as={MdPlayArrow} />
          </Box>

          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{displayName} - Trailer</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box
                  as="iframe"
                  width="100%"
                  height="315px"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
                />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="gray" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <Box display="flex" alignSelf="end" border="2px" p={3}  fontSize="20px" color="gray" fontWeight="bold">
           No trailer available! 
        </Box>
      )}
    </Box>
  );
};

export default Trailer;
