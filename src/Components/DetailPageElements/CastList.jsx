import React from 'react';
import { Box, Grid, Flex, Avatar, Text, Heading } from '@chakra-ui/react';

const CastList = ({ cast }) => (
  <Box mb={8} p={4} borderRadius="md">
    <Heading as="h2" size="lg" mb={4}>
      Cast
    </Heading>
    <Grid templateColumns='repeat(auto-fill, minmax(250px, 1fr))' gap={4}>
      {cast.map((castMember) => (
        <Box
          key={castMember.id}
          p={4}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="sm"
          _hover={{ bg: "gray.500", boxShadow: "md" }}
        >
          <Flex
            align="center"
            justify="center"
            direction="column"
            textAlign="center"
          >
            <Avatar
              src={`https://image.tmdb.org/t/p/w200${castMember.profile_path}`}
              size="md"
              mb={2}
            />
            <Text
              fontWeight="bold"
              fontSize="md"
              noOfLines={1}
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {castMember.name}
            </Text>
            <Text
              fontSize="sm"
              noOfLines={1}
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {castMember.character}
            </Text>
          </Flex>
        </Box>
      ))}
    </Grid>
  </Box>
);

export default CastList;
