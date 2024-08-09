import React from "react";
import { Heading, Text } from "@chakra-ui/react";

const MovieHeader = ({ title, overview }) => (
  <>
    
    <Heading as="h1" size="xl" my={4} textAlign="start">
      {title}
    </Heading>
    <Text fontSize="lg"  >
      {overview}
    </Text>
  </>
);

export default MovieHeader;
