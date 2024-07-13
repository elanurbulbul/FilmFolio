import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Image, Spinner, Stack, Text, Box, Heading } from "@chakra-ui/react";

const PersonDetailapi = () => {
  const { personId } = useParams();
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

  const genderText = personDetail.gender === 1 ? "woman" : personDetail.gender === 2 ? "man" : "unknown";

  return (
    <Container maxW="container.xl" mt={{ base: 4, md: 2 }} p={4}>
      <Image 
        src={`https://image.tmdb.org/t/p/w500${personDetail.profile_path}`}
        alt={personDetail.name} 
      />
      <Text>{personDetail.name}</Text>
      <Text>{personDetail.biography}</Text>
      <Text>{genderText}</Text>
      <Text>{personDetail.birthday}</Text>
      <Text>{personDetail.place_of_birth}</Text>
      
     
      
      <Box mt={8}>
        <Heading size="lg">Credits</Heading>
        <Stack direction="column" mt={4} spacing={4}>
          {personDetail.credits.cast.map((cast, index) => (
            <Box key={index} p={4} borderWidth={1} borderRadius="lg">
              <Image 
                boxSize="100px"
                src={`https://image.tmdb.org/t/p/w500${cast.poster_path}`}
                alt={cast.title} 
                mb={2}
              />
              <Text fontWeight="bold">{cast.title}</Text>
              <Text>{cast.character}</Text>
              <Text>{cast.release_date}</Text>
              <Text>{cast.overview}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default PersonDetailapi;
