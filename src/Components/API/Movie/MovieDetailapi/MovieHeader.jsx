import React from "react";
import { Heading, Text, Link } from "@chakra-ui/react";

const MovieHeader = ({ title, overview, homepage }) => (
  <>
    {homepage ? (
      <Link _hover={{textDecoration:"none"}} href={homepage} isExternal textDecoration="none">
        <Heading as="h1" size="xl" my={4} textAlign="start">
          {title}
        </Heading>
      </Link>
    ) : (
      <Heading as="h1" size="xl" my={4} textAlign="start">
        {title}
      </Heading>
    )}
    <Text maxWidth="1132px" fontSize="lg" fontWeight="400">
      {overview}
    </Text>
  </>
);

export default MovieHeader;
