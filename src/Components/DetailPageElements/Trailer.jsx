import React from "react";
import { Box, Button, Link } from "@chakra-ui/react";

const Trailer = ({ trailer }) => (
  trailer && (
    <Box mt={4}>
      <Button as="h2" size="lg" mb={2}>
        <Link href={`https://www.youtube.com/watch?v=${trailer.key}`} isExternal>
          Watch Trailer
        </Link>
      </Button>
    </Box>
  )
);

export default Trailer;
