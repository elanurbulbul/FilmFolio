import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Spinner, Stack } from "@chakra-ui/react";
import PersonHeader from "./PersonHeader";
import PersonCredits from "./PersonCredits";
import PersonCrew from "./PersonCrew";
import ProfileImages from "./ProfileImages";

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
      <Container >
        <Spinner />
      </Container>
    );
  }

  return (
    <Stack my={20}>
      <PersonHeader personDetail={personDetail} />
      <ProfileImages images={personDetail.images}/>

      <PersonCredits credits={personDetail.credits} navigate={navigate} />

      <PersonCrew credits={personDetail.credits}/>
    </Stack>
  );
};

export default PersonDetailapi;
