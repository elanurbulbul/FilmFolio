import React from 'react';
import { Box, Icon, Text, Flex, Grid } from '@chakra-ui/react';

const GenreList = ({ genres, release_date,first_air_date }) => (
  <Box  >
   
    <Flex wrap="wrap" gap={2} alignItems="center">
    <Text  fontWeight="500" fontSize="1.125rem" mr={1} fontFamily="inherit">
            {first_air_date?.substring(0, 4) || release_date?.substring(0, 4)}

          </Text>
      {genres.map((genre) => (
        <>
          <Icon alignSelf="center" viewBox='0 0 200 200' boxSize="10px" >
        <path
          fill='currentColor'
          d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
        />
      </Icon>
        <Grid  key={genre.id} fontWeight="500"  fontSize="1,125rem" >
          {genre.name} 
          
        </Grid>
      </>
        
      ))}
    </Flex>
  </Box>
);

export default GenreList;
