import React from "react";
import { Heading, Text } from "@chakra-ui/react";

const TVShowHeader = ({ name, overview, seasons, episodes, showDetails }) => (
  <>
    <Heading as="h1" size="xl" my={4} textAlign="start">
      {name}
    </Heading>
    {showDetails && (
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
    )}
  </>
);

export default TVShowHeader;
