import React from "react";
import { Image, Text, Box, Card, Stack, Heading } from "@chakra-ui/react";
import "./index.scss";

const PersonHeader = ({ personDetail }) => {
  return (
    <Card
      p={2}
      borderRadius="lg"
      display="flex"
      flexDirection={{ base: "column", lg: "row" }} // Fotoğraf ve metni yan yana göster
      align={{ base: "center", lg: "stretch" }} // Fotoğraf ve metni hizala
      spacing={10}
      mb={8}
    >
      <Stack
        mb={{ base: 5, lg: 0 }} // Fotoğrafın alt boşluğunu ayarla
        alignSelf="center" // Fotoğrafın konumunu ayarla
        display={personDetail.profile_path ? "block" : "none"} // Fotoğraf yoksa gizle
      >
        {personDetail.profile_path ? (
          <Image
            borderRadius="md"
            src={`https://image.tmdb.org/t/p/w500${personDetail.profile_path}`}
            alt={personDetail.name}
            objectFit="cover"
            mr={{ base: 0, lg: 10 }} // Fotoğrafın sağındaki boşluğu ayarla
          />
        ) : null}
      </Stack>
      <Stack
        className="person_header_text"
        spacing={4}
        flex="1"
        align="stretch"
      >
        <Heading fontWeight="bold" fontSize="2xl">{personDetail.name}</Heading>
        <Text>
          {personDetail.biography ? personDetail.biography : "No biography available"}
        </Text>
        <Text><strong>Birthday:</strong> {personDetail.birthday || "Not available"}</Text>
        <Text><strong>Place of Birth:</strong> {personDetail.place_of_birth || "Not available"}</Text>
        {!personDetail.profile_path && (
          <Text>No photo available</Text> // Fotoğraf yoksa yazıyı ekle
        )}
      </Stack>
    </Card>
  );
};

export default PersonHeader;
