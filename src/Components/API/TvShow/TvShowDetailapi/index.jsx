import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  Heading,
  Spinner,
  Stack,
  Box,
  Center,
  Text,
  HStack,
  VStack,
  Flex,
} from "@chakra-ui/react";
import TVShowHeader from "./TvShowHeader";
import TvShowPoster from "./TvShowPoster";
import CastList from "../../DetailPageElements/CastList";
import GenreList from "../../DetailPageElements/GenreList";
import Trailer from "../../DetailPageElements/Trailer";

const TvShowDetailapi = () => {
  const { tvId } = useParams();
  const [tvShowDetail, setTvShowDetail] = useState(null);

  const getTvShowDetail = () => {
    const apiUrl = `${
      import.meta.env.VITE_API_BASE_URL
    }/tv/${tvId}?append_to_response=videos,genres,images,people,credits,recommendations&language=en-US&api_key=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setTvShowDetail(data))
      .catch((err) => console.error("Error fetching tv details:", err));
  };

  useEffect(() => {
    getTvShowDetail();
  }, [tvId]);

  if (!tvShowDetail) {
    return (
      <Center>
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

  const officialTrailer = tvShowDetail.videos.results.find(
    (video) => video.type === "Trailer" && video.official
  );

  return (
    <Stack my={20}>
      <Stack>
        <TVShowHeader name={tvShowDetail.name} />
        <Text textAlign="start">{tvShowDetail.first_air_date}</Text>

        <Flex>
          <>
            <TvShowPoster
              posterPath={tvShowDetail.poster_path}
              title={tvShowDetail.name}
            />
          </>

          <Trailer
            title={tvShowDetail.name}
            trailer={officialTrailer}
            posterPath={tvShowDetail.poster_path}
          />
        </Flex>
      </Stack>

      <Card
        p={2}
        borderRadius="lg"
        display="flex"
        flexDirection={{ base: "column-reverse", md: "row" }}
        align={{ base: "center", md: "stretch" }}
        spacing={5}
        mb={8}
      >
        <Stack flex="1" align="stretch">
          <Stack>
            <TVShowHeader seasons={tvShowDetail.number_of_seasons}
          episodes={tvShowDetail.number_of_episodes}  overview={tvShowDetail.overview} />
          </Stack>
          <Stack
            flex="1"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
          >
            <GenreList genres={tvShowDetail.genres} />
          </Stack>
        </Stack>
      </Card>
      <CastList cast={tvShowDetail.credits.cast} />
    </Stack>
  );
};

export default TvShowDetailapi;
