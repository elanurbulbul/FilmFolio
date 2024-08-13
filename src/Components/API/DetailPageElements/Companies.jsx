import React from "react";
import { SimpleGrid, Image, Text, Box, Stack } from "@chakra-ui/react";
import {  DiAndroid } from "react-icons/di";

const Company = ({ companies }) => {
  return (
    <Stack spacing={4}>
      <Text textAlign="start" fontWeight="600" fontSize="25px">
        Production Companies
      </Text>
      <SimpleGrid columns={{ base: 3,sm:4, md: 5, lg: 6 }} spacing={6}>
        {companies.map((company) => (
          <Box key={company.id} p={2} textAlign="center">
            {company.logo_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                alt={company.name}
                width="100%"
                height="auto"
                aspectRatio="1/1"
                objectFit="contain"
                m="auto" 
              />
            ) : (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderWidth="1px"
                width="100%"
                height="auto"
                aspectRatio="1/1"
                borderRadius="md"
                
              >
                < DiAndroid/>
              </Box>
            )}
            <Text mt={2}  fontSize="14px">
              {company.name}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Company;
