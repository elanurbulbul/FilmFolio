import React, { useEffect, useState } from "react";
import { Spinner, Box, Text, Stack,SimpleGrid } from "@chakra-ui/react";
import MovieCard from "../../../AllCards/MovieCards/card";
import TvCard from "../../../AllCards/TvShowCards/card";
import PersonCard from "../../../AllCards/PersonCards/card";

const MultiSearch = ({ searchTerm }) => {
  const [multiSearch, setMultiSearch] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMultiSearch = () => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/search/multi?language=en-US&query=${searchTerm}&page=1&api_key=${import.meta.env.VITE_API_KEY}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        setMultiSearch(json.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching multi search results:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (searchTerm) {
      getMultiSearch();
    }
  }, [searchTerm]);

  if (loading) {
    return <div><Spinner /></div>;
  }

  const sortedResults = multiSearch.reduce((acc, item) => {
    if (item.media_type === "movie") {
      acc.movies.push(item);
    } else if (item.media_type === "tv") {
      acc.tvShows.push(item);
    } else if (item.media_type === "person") {
      acc.people.push(item);
    }
    return acc;
  }, { movies: [], tvShows: [], people: [] });

  return (
    <Box p={4}>
      {sortedResults.movies.length > 0 && (
        <Box mb={6}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Movies</Text>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4, xl: 5 }} spacing={4}>
          {sortedResults.movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </SimpleGrid>
          
        </Box>
      )}
      {sortedResults.tvShows.length > 0 && (
        <Box mb={6}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>TV Shows</Text>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4, xl: 5 }} spacing={4}>
          {sortedResults.tvShows.map(tv => (
              <TvCard key={tv.id} tv={tv} />
            ))}
          </SimpleGrid>
          
        </Box>
      )}
      {sortedResults.people.length > 0 && (
        <Box mb={6}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>People</Text>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4, xl: 5 }} spacing={4}>
            {sortedResults.people.map(person => (
              <PersonCard key={person.id} person={person} />
            ))}
          </SimpleGrid>
          </Box>
      )}
    </Box>
  );
};

export default MultiSearch;
