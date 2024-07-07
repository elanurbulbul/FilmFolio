import React from "react";
import { Box, Button, Link, Text } from "@chakra-ui/react";

const Trailer = ({ trailer }) => (
  <Box mt={4}>
    {trailer ? (
      <Button as="h2" size="lg" mb={2}>
        <Link
          href={`https://www.youtube.com/watch?v=${trailer.key}`}
          isExternal
          textDecoration="none" // Ensures no underline on link
          _hover={{ textDecoration: "none" }} // No underline on hover
        >
          Watch Trailer
        </Link>
      </Button>
    ) : (
      <Text fontSize="20px" color="gray" fontWeight="bold">
        ( No trailer available! )
      </Text>
    )}
  </Box>
);

export default Trailer;
