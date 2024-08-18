import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import MovieSearch from '../../Components/API/Search/MovieSearch';
import movie_bg from "../../Components/Images/movie_bg.jpg";

const Header = () => {
    return (
        <Box px={3}>
            <Heading textAlign="start" mb={3}>
                MOVIES
            </Heading>

            <MovieSearch />
        </Box>
    );
};

export default Header;
