import React, { useEffect, useState } from "react";
import { Spinner, Center, Box, Text, SimpleGrid, Input, InputGroup, InputRightElement, IconButton, useToast } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import TvCard from "../../../AllCards/TvShowCards/card";

const TvSearch = ({ searchTerm: initialSearchTerm = "" }) => {
  const [tv, setTv] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const toast = useToast();

  const getTvSearch = (query) => {
    setLoading(true);
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/search/tv?language=en-US&query=${query}&page=1&api_key=${import.meta.env.VITE_API_KEY}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        setTv(json.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tv search results:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (searchTerm.length >= 3) {
      getTvSearch(searchTerm);
    } else if (searchTerm.length === 0) {
      setTv([]);
    }
  }, [searchTerm]);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      toast({
        title: "Please enter a search term...",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    } else if (searchTerm.trim().length < 3) {
      toast({
        title: "Please enter at least 3 characters.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    } else {
      getTvSearch(searchTerm.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box>
        <Box>
        <InputGroup my={4} >
        <Input
          placeholder="You can find the movie you are looking for here.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress} 
        />
        <InputRightElement>
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            onClick={handleSearch}
          />
        </InputRightElement>
      </InputGroup>
        </Box>
      

      {loading ? (
        <Center height="100vh">
          <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="gray.400" size="xl" />
        </Center>
      ) : tv.length > 0 ? (
        <Box>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4, xl: 5 }} spacing={4}>
            {tv.map((tv) => (
              <TvCard key={tv.id} tv={tv} />
            ))}
          </SimpleGrid>
        </Box>
      ) : (
        searchTerm.length >= 3 && <Text>No movies found.</Text>
      )}
    </Box>
  );
};

export default TvSearch;
