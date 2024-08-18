import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import TvSearch from '../../Components/API/Search/TvSearch';

const Header = () => {
    return (
        <Box px={3}>
            <Heading textAlign="start" mb={3}>
                TV SHOWS
            </Heading>

            <TvSearch />
        </Box>
    );
};

export default Header;
