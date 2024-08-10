import React from "react";
import { SimpleGrid, Image, Text, Box, Stack } from "@chakra-ui/react";

const Company = ({ companies }) => {
  return (
    <Stack spacing={4}>
      <Text textAlign="start" fontWeight="600" fontSize="25px">
        Production Companies
      </Text>
      <SimpleGrid columns={{ base: 3,sm:4, md: 5, lg: 6 }} spacing={4}>
        {companies.map((company) => (
          <Box key={company.id} p={2} textAlign="center">
            {company.logo_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                alt={company.name}
                boxSize="125px"
                objectFit="contain"
                m="auto" 
              />
            ) : (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxSize="125px"
                borderWidth="1px"
                borderRadius="md"
              >
                <Text fontSize="14px">No Logo</Text>
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
