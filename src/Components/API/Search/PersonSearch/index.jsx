import React, { useEffect, useState } from "react";
import { Spinner, Center, Box, Text, SimpleGrid, Input, InputGroup, InputRightElement, IconButton, useToast } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import PersonCard from "../../../AllCards/PersonCards/card";


const PersonSearch = ({ searchTerm: initialSearchTerm = "" }) => {
  const [person, setPerson] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const toast = useToast();

  const getPersonSearch = (query) => {
    setLoading(true);
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/search/person?language=en-US&query=${query}&page=1&api_key=${import.meta.env.VITE_API_KEY}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        setPerson(json.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tv search results:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (searchTerm.length >= 3) {
      getPersonSearch(searchTerm);
    } else if (searchTerm.length === 0) {
      setPerson([]);
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
      getPersonSearch(searchTerm.trim());
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
      ) : person.length > 0 ? (
        <Box>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4, xl: 5 }} spacing={4}>
            {person.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </SimpleGrid>
        </Box>
      ) : (
        searchTerm.length >= 3 && <Text>No movies found.</Text>
      )}
    </Box>
  );
};

export default PersonSearch;
