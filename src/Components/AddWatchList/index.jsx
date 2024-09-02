import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  SimpleGrid,
  Heading,
  Text,
  Center,
  Spinner,
  useToast,
  Link,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import MovieCard from "../AllCards/MovieCards/card";
import TvCard from "../AllCards/TvShowCards/card";
import { useAuth } from "../Context/AuthContext";

const AddWatchList = () => {
  const [loading, setLoading] = useState(true); 
  const [movieWatchlist, setMovieWatchlist] = useState([]);
  const [tvShowWatchlist, setTvShowWatchlist] = useState([]);
  const { user } = useAuth();
  const toast = useToast();
  const navigate = useNavigate(); 

  useEffect(() => {
    if (user) {
      try {
        const storedWatchlist = localStorage.getItem(`watchlist_${user.email}`);
        if (storedWatchlist) {
          const parsedWatchlist = JSON.parse(storedWatchlist);
          
          if (Array.isArray(parsedWatchlist)) {
            const movies = parsedWatchlist.filter((item) => item.title);
            const tvShows = parsedWatchlist.filter((item) => item.name);
            setMovieWatchlist(movies);
            setTvShowWatchlist(tvShows);
          } else {
            console.error("Watchlist data is not an array:", parsedWatchlist);
          }
        }
      } catch (error) {
        console.error("Error parsing watchlist:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false); 
    }
  }, [user]); 

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

    if (user) {
      localStorage.setItem(`watchlist_${user.email}`, JSON.stringify(updatedWatchlist));
    }
  };

  const isEmpty = movieWatchlist.length === 0 && tvShowWatchlist.length === 0;

  return (
    <Box>
      {loading ? (
        <Center height="100vh">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="gray.400"
            size="xl"
          />
        </Center>
      ) : (
        <>
          {user ? (
            <Box my={10}>
              {isEmpty ? (
                <Center height="100vh">
                  <Text>No TV Shows and Movies in watchlist.</Text>
                </Center>
              ) : (
                <>
                  {movieWatchlist.length > 0 && (
                    <Box>
                      <Heading mb={2} textAlign="start">
                        Movies
                      </Heading>
                      <SimpleGrid columns={[2, 3, 4, 5, 6]} spacing={4}>
                        {movieWatchlist.map((movie) => (
                          <Box key={movie.id}>
                            <MovieCard movie={movie} />
                            <Button
                              my={2}
                              onClick={() =>
                                removeFromWatchlist(movie.id, "movie")
                              }
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
          ) : (
            <Center height="100vh">
            <Box textAlign="center">
              <Text mb={4}>You need to sign in to access your watchlist.</Text>
              <Link color="teal.500" onClick={() => navigate("/sign-in")}>
                Click here to sign in
              </Link>
            </Box>
          </Center>
          
          )}
        </>
      )}
    </Box>
  );
};

export default AddWatchList;
