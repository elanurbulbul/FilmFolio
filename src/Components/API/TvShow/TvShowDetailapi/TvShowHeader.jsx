import React from "react";
import { Heading, Text, Flex } from "@chakra-ui/react";

export const TVShowName = ({ name }) => (
  <>
    <Heading as="h1" size="xl" textAlign="start">
      {name}
    </Heading>
  </>
);

export const TVShowDetails = ({ overview, seasons, episodes }) => (
  <>
    <Text textAlign="start" fontSize="lg" mb={4}>
      {overview}
    </Text>
    <Flex mb={2}>
      <Text mr={2} fontSize="lg" fontWeight="500">
        Seasons: {seasons}
      </Text>{" "}
      |
      <Text ml={2} fontSize="lg" fontWeight="500">
        Episodes: {episodes}
      </Text>
    </Flex>
  </>
);
