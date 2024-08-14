import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Center, Spinner, Stack, Button, Box } from "@chakra-ui/react";
import PersonHeader from "./PersonHeader";
import PersonCredits from "./PersonCredits";
import PersonCrew from "./PersonCrew";
import ProfileImages from "./ProfileImages";

const PersonDetailapi = () => {
  const { personId } = useParams();
  const navigate = useNavigate();
  const [personDetail, setPersonDetail] = useState(null);
  const [showImages, setShowImages] = useState(false);

  const handleToggle = () => {
    setShowImages((prev) => !prev);
  };

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
      <Center height="100vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="gray.400"
        size="xl"
      />
    </Center>
    );
  }

  const hasImages = personDetail.images && personDetail.images.profiles && personDetail.images.profiles.length > 0;

  const hasCredits = personDetail.credits && personDetail.credits.cast && personDetail.credits.cast.length > 0;

  const hasCrew = personDetail.credits && personDetail.credits.crew && personDetail.credits.crew.length > 0;

  return (
    <Stack my={20}>
      <PersonHeader personDetail={personDetail} />
      
      {hasImages && (
        <Box textAlign="start" mb={4}>
          <Button onClick={handleToggle}>
            {showImages
              ? "Hide Photo Gallery"
              : `Click here to see ${personDetail.name}'s Photo Gallery`}
          </Button>
        </Box>
      )}
      
      {showImages && <ProfileImages images={personDetail.images} />}
      
      {hasCredits && <PersonCredits credits={personDetail.credits} navigate={navigate} />}
      {hasCrew && <PersonCrew credits={personDetail.credits} />}
    </Stack>
  );
};

export default PersonDetailapi;
