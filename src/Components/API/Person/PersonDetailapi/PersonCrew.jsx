import React, { useState } from "react";
import {
  SimpleGrid,
  Flex,
  Box,
  Text,
  Button,
  Image,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaPhotoFilm } from "react-icons/fa6";


const PersonCrew = ({ credits }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const navigate = useNavigate();

  const handleCreditClick = (crew) => {
    if (crew.title) {
      navigate(`/movies/${crew.id}`);
    } else if (crew.name) {
      navigate(`/tvshows/${crew.id}`);
    }
  };

  const handleShowMoreClick = () => {
    setVisibleCount((prevCount) => {
      const newCount = prevCount + 6;
      return Math.min(newCount, credits.crew.length); 
    });
  };

  return (
    <Box mt={8} >
      <Heading textAlign="start">Credits (Crew)</Heading>
      <Text textAlign="start" my={3}>Apart from acting, she/he has worked in many films and TV series in different departments.</Text>
      <SimpleGrid columns={[2, 3, 4, 5, 6]} spacing={4}>
        {credits.crew.slice(0, visibleCount).map((crew, index) => (
          <Box
          key={crew.id || index}
          display="flex"
          align="center"
          justifyContent="space-between"
          flexDirection="column"
          textAlign="center"
          borderWidth={1}
          borderRadius="lg"
          onClick={() => handleCreditClick(crew)}
          cursor="pointer"
        >
            {crew.poster_path ? (
              <Image
                width="100%"
                height="auto"
                maxWidth="200px"
                aspectRatio="2/3"
                src={`https://image.tmdb.org/t/p/w200${crew.poster_path}`}
                alt={crew.title || crew.name}
                borderTopRadius="md"
              />
            ) :   (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="auto"
                aspectRatio={2/3}
                backgroundColor="gray.400"
                borderTopRadius="8px"
              >
                <FaPhotoFilm boxSize="50px" color="gray.500" />
              </Box>
            )}
            <Text fontWeight="bold" isTruncated px={1} my={2}>
              {crew.title || crew.name}
            </Text>
            <Text mb={1} px={1} fontSize="sm" color="gray.500">
              Department: {crew.department ? crew.department : "Unknown"}
              <br />
              Job: {crew.job}
             
            </Text>
          </Box>
        ))}
      </SimpleGrid>
      {credits.crew.length > 6 && visibleCount < credits.crew.length && (
        <Button mt={4} onClick={handleShowMoreClick} colorScheme="teal">
          Show More
        </Button>
      )}
    </Box>
  );
};

export default PersonCrew;
