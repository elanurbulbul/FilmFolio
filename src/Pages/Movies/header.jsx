import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import MovieSearch from '../../Components/API/Search/MovieSearch';
import movie_bg from "../../Components/Images/movie_bg.jpg";

const Header = () => {
    return (
        <Box p={3}>
            <Heading textAlign="start" mb={5}>
                MOVIES
            </Heading>
           
            <Box
                backgroundImage={`url(${movie_bg})`}
                backgroundSize="cover"
                backgroundPosition="center"
                aspectRatio="5/4"
                mb={5}
                borderRadius="20px"
                p={6} // Reduced padding to avoid content overflow
                bgColor="gray.600"
                color="white" // Ensures text is readable against dark background
            >
                <Text fontSize="md"> {/* Adjusted font size for better fit */}
                    In our extensive film collection, you can easily find the movie you're interested in and access detailed information. Discover popular, new, and upcoming films, and view ratings and cast lists. With our wide movie archive, you can quickly find options that match your preferences and stay updated with the latest in cinema. Start your search now to enhance your movie experience and uncover your favorite films!
                </Text>
            </Box>

            <MovieSearch />
        </Box>
    );
};

export default Header;
