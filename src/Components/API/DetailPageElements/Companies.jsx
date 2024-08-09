import React from "react";
import { Flex, Image, Text, Stack } from "@chakra-ui/react";

const Company = ({ companies }) => {
  return (
    <Stack spacing={4}>
      <Text textAlign="start" fontWeight="600" fontSize="25px">
        Production Companies
      </Text>
      <Flex wrap="wrap" gap={4}>
        {companies.map((company) => (
          <Flex key={company.id} align="center" direction="column" p={2}>
            {company.logo_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                alt={company.name}
                boxSize="110px"
                objectFit="contain"
              />
            ) : (
              <Text
                display="flex"
                boxSize="110px" // Bo  x boyutunu burada belirleyin
                alignItems="center"
                justifyContent="center"
                fontSize="14px"
              >
                No Logo
              </Text>
            )}
            <Text mt={2} textAlign="center" fontSize="14px">
              {company.name}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Stack>
  );
};

export default Company;
