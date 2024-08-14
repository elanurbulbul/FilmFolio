import React, { useState } from "react";
import { Text, Box, Stack, Heading, Flex, Button } from "@chakra-ui/react";

const PersonHeader = ({ personDetail }) => {
   
  return (
    <Stack textAlign="start" spacing={4}>
      <Heading textAlign="start" fontWeight="600" fontSize="35px">
        {personDetail.name}
      </Heading>
      <Stack>
        <Box>
          <Text>
            <strong>Birthday:</strong>{" "}
            {personDetail.birthday || "There is no information about birthday."}
          </Text>
          <Text>
            <strong>Place of Birth:</strong>{" "}
            {personDetail.place_of_birth || "There is no information about the place."}
          </Text>
        </Box>
      </Stack>

      <Text mt="-10px" fontSize="lg">
        {personDetail.biography
          ? personDetail.biography
          : "There is no information about biography."}
      </Text>
      
    </Stack>
  );
};

export default PersonHeader;
