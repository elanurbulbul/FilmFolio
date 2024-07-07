import React from "react";
import { Heading, Text } from "@chakra-ui/react";

const TVShowHeader = ({ name, overview }) => (
  <>
    <Heading as="h1" size="xl" my={4}>
      {name}
    </Heading>
    <Text fontSize="lg">
      {overview}
    </Text>
  </>
);

export default TVShowHeader;
