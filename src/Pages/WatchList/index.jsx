import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  SimpleGrid,
  Heading,
  Container,
  Text,
  Center,
  Spinner
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import MovieCard from "../../Components/AllCards/MovieCards/card";
import TvCard from "../../Components/AllCards/TvShowCards/card";

const WatchList = () => {
  const [loading, setLoading] = useState(true);
  const [movieWatchlist, setMovieWatchlist] = useState([]);
  const [tvShowWatchlist, setTvShowWatchlist] = useState([]);

  useEffect(() => {
    const storedWatchlist = localStorage.getItem("watchlist");
    if (storedWatchlist) {
      const parsedWatchlist = JSON.parse(storedWatchlist);
      const movies = parsedWatchlist.filter((item) => item.title);
      const tvShows = parsedWatchlist.filter((item) => item.name);
      setMovieWatchlist(movies);
      setTvShowWatchlist(tvShows);
    }
    setLoading(false);
  }, []);

  const removeFromWatchlist = (id, type) => {
    let updatedMovieWatchlist = movieWatchlist;
    let updatedTvShowWatchlist = tvShowWatchlist;

    if (type === "movie") {
      updatedMovieWatchlist = movieWatchlist.filter((movie) => movie.id !== id);
      setMovieWatchlist(updatedMovieWatchlist);
    } else if (type === "tv") {
      updatedTvShowWatchlist = tvShowWatchlist.filter((tv) => tv.id !== id);
      setTvShowWatchlist(updatedTvShowWatchlist);
    }

    const updatedWatchlist = [
      ...updatedMovieWatchlist,
      ...updatedTvShowWatchlist,
    ];
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  const isEmpty = movieWatchlist.length === 0 && tvShowWatchlist.length === 0;

  return (
    <Container
      maxW={{
        base: "container.sm",
        md: "container.lg",
        lg: "container.lg",
        xl: "container.xl",
      }}
    >
       {loading ? (
        <Center height="100vh">
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="gray.400" size="xl" />
      </Center>
      ) : (
        <Box my={10}>
        {isEmpty ? (
          <Center height="100vh">
            <Text>No Tv Shows and Movies in watchlist.</Text>
          </Center>
        ) : (
          <>
            {movieWatchlist.length > 0 && (
              <Box >
                <Heading mb={2} textAlign="start">
                  Movies
                </Heading>
                <SimpleGrid columns={[2, 3, 4, 5, 6]} spacing={4}>
                  {movieWatchlist.map((movie) => (
                    <Box key={movie.id}>
                      <MovieCard movie={movie} />
                      <Button
                        my={2}
                        onClick={() => removeFromWatchlist(movie.id, "movie")}
                      >
                        <DeleteIcon />
                      </Button>
                    </Box>
                  ))}
                </SimpleGrid>
              </Box>
            )}
  
            {tvShowWatchlist.length > 0 && (
              <Box mt={10}>
                <Heading mb={2} textAlign="start">
                  TV Shows
                </Heading>
                <SimpleGrid columns={[2, 3, 4, 5, 6]} spacing={4}>
                  {tvShowWatchlist.map((tv) => (
                    <Box key={tv.id}>
                      <TvCard tv={tv} />
                      <Button
                        my={2}
                        onClick={() => removeFromWatchlist(tv.id, "tv")}
                      >
                        <DeleteIcon />
                      </Button>
                    </Box>
                  ))}
                </SimpleGrid>
              </Box>
            )}
          </>
        )}
        </Box>
      )}
      
    
    </Container>
  );
};

export default WatchList;
