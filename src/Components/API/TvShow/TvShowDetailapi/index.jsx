import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Spinner, Stack } from "@chakra-ui/react";
import TVShowHeader from "./TvShowHeader";
import TvShowPoster from "./TvShowPoster";
import CastList from "../../../DetailPageElements/CastList";
import GenreList from "../../../DetailPageElements/GenreList";
import Trailer from "../../../DetailPageElements/Trailer";

const TvShowDetailapi = () => {
  const { tvId } = useParams();
  const [tvShowDetail, setTvShowDetail] = useState(null);

  const getTvShowDetail = () => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/tv/${tvId}?append_to_response=videos,genres,images,people,credits,recommendations&language=en-US&api_key=${import.meta.env.VITE_API_KEY}`;

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
      <Container centerContent>
        <Spinner />
      </Container>
    );
  }

  const officialTrailer = tvShowDetail.videos.results.find(
    (video) => video.type === "Trailer" && video.official
  );

  return (
    <Container maxW="container.xl" mt={{ base: 4, md: 2 }} p={4}>
      <Box
        display="flex"
        flexDirection={{ base: "column-reverse", md: "row" }}
        align={{ base: "center", md: "stretch" }}
        spacing={5}
        mb={8}
      >
        <Stack flex="1" mb={{ base: 5, md: 0 }} alignSelf={"center"}>
          <TvShowPoster
            posterPath={tvShowDetail.poster_path}
            name={tvShowDetail.name}
          />
        </Stack>
        <Stack flex="1" align="stretch">
          <Stack>
            <TVShowHeader
              name={tvShowDetail.name}
              overview={tvShowDetail.overview}
            />
            <Trailer trailer={officialTrailer} />
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
      </Box>
      <CastList cast={tvShowDetail.credits.cast} />
    </Container>
  );
};

export default TvShowDetailapi;
