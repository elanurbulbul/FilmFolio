import React from "react";
import { Box, Button, Image, Icon, useDisclosure } from "@chakra-ui/react";
import { MdPlayArrow } from "react-icons/md"; // YouTube play icon
import { PiFilmSlate } from "react-icons/pi"; // Film slate icon from react-icons

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const placeholderThumbnail = 'https://via.placeholder.com/640x360.png?text=';

const Trailer = ({ trailer, name, title, posterPath }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const displayName = name || title;

  const getVideoThumbnail = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <Box position="relative" alignSelf="center">
      {trailer ? (
        <>
          <Image
            width="100%"
            height="auto"
            aspectRatio="4/3"
            src={getVideoThumbnail(trailer.key)}
            alt="Watch Trailer"
            cursor="pointer"
            onClick={onOpen}
            borderRadius="lg"
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
            <Icon as={MdPlayArrow} />
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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px"
          borderColor="gray.100"
          aspectRatio="4/3"
          width="100%"
          maxWidth="480px"
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
            alt="No Trailer Available"
          />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="gray.500"
            fontSize="50px"
          >
            <Icon as={PiFilmSlate} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Trailer;
