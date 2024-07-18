import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
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

const Trailer = ({ trailer, name, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const displayName = name || title;

  return (
    <Box mt={4}>
      {trailer ? (
        <>
          <Button onClick={onOpen} as="h2" size="lg" mb={2}>
            Watch Trailer
          </Button>

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
        <Text fontSize="20px" color="gray" fontWeight="bold">
          ( No trailer available! )
        </Text>
      )}
    </Box>
  );
};

export default Trailer;
