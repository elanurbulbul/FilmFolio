import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import MoviesTrending from "../../Components/API/Trending/MoviesTrending/MoviesTrending";
import TvTrending from "../../Components/API/Trending/TvTrending/TvShowsTrending";
import { useAuth } from "../../Components/Context/AuthContext";

const Homepage = () => {
  const { user } = useAuth(); 

  return (
    <Container maxW={{ base: 'container.sm', md: "container.md", lg: "container.lg", xl: "container.xl" }}>
      <Box my={20}>
        {user && (
          <Box px={3} mb="100px">
            <Text  fontSize="large" fontWeight="400">
            "Welcome, {user.name}! You can explore movies and TV shows, learn more about them, and add your favorites to your watchlist.        </Text>
          </Box>
        )}
        <MoviesTrending />
        <TvTrending />
      </Box>
    </Container>
  );
};

export default Homepage;
