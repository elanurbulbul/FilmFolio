import React from "react";
import { Heading, Text } from "@chakra-ui/react";

export const TVShowName = ({ name }) => (
  <Heading as="h1" size="xl" my={4} textAlign="start">
    {name}
  </Heading>
);

export const TVShowDetails = ({ overview, seasons, episodes }) => (
  <>
    <Text fontSize="lg" mb={4}>
      {overview}
    </Text>
    <Text fontSize="lg" fontWeight="bold" mb={2}>
      Seasons: {seasons}
    </Text>
    <Text fontSize="lg" fontWeight="bold">
      Episodes: {episodes}
    </Text>
  </>
);
