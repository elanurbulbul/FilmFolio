import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Image, Spinner, Stack, Text, Box, Heading, SimpleGrid, Flex } from "@chakra-ui/react";

const PersonDetailapi = () => {
  const { personId } = useParams();
  const navigate = useNavigate();
  const [personDetail, setPersonDetail] = useState(null);

  const getPersonDetail = () => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/person/${personId}?append_to_response=videos,genres,images,people,credits,recommendations&language=en-US&api_key=${import.meta.env.VITE_API_KEY}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setPersonDetail(data))
      .catch((err) => console.error("Error fetching person details:", err));
  };

  useEffect(() => {
    getPersonDetail();
  }, [personId]);

  if (!personDetail) {
    return (
      <Container centerContent>
        <Spinner />
      </Container>
    );
  }

  const handleCreditClick = (cast) => {
    if (cast.title) {
      navigate(`/movies/${cast.id}`);
    } else if (cast.name) {
      navigate(`/tvshows/${cast.id}`);
    }
  };

  const genderText = personDetail.gender === 1 ? "woman" : personDetail.gender === 2 ? "man" : "unknown";

  return (
    <Container maxW="container.xl" mt={{ base: 4, md: 2 }} p={4}>
      {personDetail.profile_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/w500${personDetail.profile_path}`}
          alt={personDetail.name}
        />
      ) : (
        <Text>No photo available</Text>
      )}
      <Text>{personDetail.name}</Text>
      <Text>{personDetail.biography}</Text>
      <Text>{genderText}</Text>
      <Text>{personDetail.birthday}</Text>
      <Text>{personDetail.place_of_birth}</Text>

      <Box mt={8}>
        <Heading size="lg">Credits</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }}  mt={4} spacing={4}>
          {personDetail.credits.cast.map((cast, index) => (
            <Flex
          
              align="center"
              direction="column"
              textAlign="center"
              key={index}
              p={4}
              borderWidth={1}
              borderRadius="lg"
              onClick={() => handleCreditClick(cast)}
              cursor="pointer"
              _hover={{ bg: "gray.200" }}
            >
              {cast.poster_path ? (
              
                <Image
                alignItems="center"
                justifyContent="center"
                  boxSize="200px"
                  src={`https://image.tmdb.org/t/p/w500${cast.poster_path}`}
                  alt={cast.title || cast.name}
                  mb={2}
                />
              ) : (
                <Text border="1px" px={8} py={20} mb={2} >No photo available</Text>
              )}
              <Text fontWeight="bold">{cast.title || cast.name}</Text>
              <Text>{cast.character}</Text>
              <Text>{cast.release_date}</Text>
              <Text>{cast.overview}</Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default PersonDetailapi;
