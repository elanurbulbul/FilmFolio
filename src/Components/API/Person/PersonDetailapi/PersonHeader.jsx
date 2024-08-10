import React from "react";
import { Text, Box, Card, Stack, Heading } from "@chakra-ui/react";
import "./index.scss";

const PersonHeader = ({ personDetail }) => {
  return (
    <Stack textAlign="start">
      <Heading textAlign="start" fontWeight="600" fontSize="35px" mb={5}>
        {personDetail.name}
      </Heading>
        <Stack>
        <Text mt={5}>
        <strong>Birthday:</strong> {personDetail.birthday || "Not available"}
      </Text>
      <Text>
        <strong>Place of Birth:</strong>{" "}
        {personDetail.place_of_birth || "Not available"}
      </Text>
        </Stack>
     
      <Text mt={3} >
        
        {personDetail.biography
          ? personDetail.biography
          : "No biography available"}
      </Text>
      
    </Stack>
  );
};

export default PersonHeader;
