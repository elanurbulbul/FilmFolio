import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Spinner, Stack, Flex } from "@chakra-ui/react";


const PersonDetailapi = () => {
  const { personId } = useParams();
  const [personDetail, setPersonDetail] = useState(null);

  const getPersonDetail = () => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/person/${personId}?append_to_response=videos,genres,images,people,credits,recommendations&language=en-US&api_key=${import.meta.env.VITE_API_KEY}`

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

 
  return (
    <Container maxW="container.xl" mt={{ base: 4, md: 2 }} p={4}>
     
    </Container>
  );
};

export default PersonDetailapi;
