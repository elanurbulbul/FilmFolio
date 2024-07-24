import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Spinner } from "@chakra-ui/react";
import PersonHeader from "./PersonHeader";
import PersonCredits from "./PersonCredits";

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

  return (
    <Container maxW="container.xl" mt={{ base: 4, md: 2 }} p={4}>
      <PersonHeader personDetail={personDetail} />
      <PersonCredits credits={personDetail.credits} navigate={navigate} />
    </Container>
  );
};

export default PersonDetailapi;
