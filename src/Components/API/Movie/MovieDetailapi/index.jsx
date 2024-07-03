import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Spinner, Stack, Flex } from "@chakra-ui/react";
import MovieHeader from "./MovieHeader";
import MoviePoster from "./MoviePoster";
import CastList from "./CastList";
import GenreList from "./GenreList";
import MovieTrailer from "./MovieTrailer";
import "./index.scss";

const MovieDetailapi = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  const getMovieDetail = () => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/movie/${movieId}?append_to_response=videos,genres,images,people,credits,recommendations&language=en-US&api_key=${import.meta.env.VITE_API_KEY}`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovieDetail(data))
      .catch((err) => console.error("Error fetching movie details:", err));
  };

  useEffect(() => {
    getMovieDetail();
  }, [movieId]);

  if (!movieDetail) {
    return (
      <Container centerContent>
        <Spinner />
      </Container>
    );
  }

  const officialTrailer = movieDetail.videos.results.find(
    (video) => video.type === "Trailer" && video.official
  );

  return (
    <Container maxW="container.xl" mt={{ base: 4, md: 2 }} p={4}>
      <Box 
        display="flex"
        flexDirection={{base:"column-reverse", md:"row"}}
        align={{ base: "center", md: "stretch" }}
        spacing={5}
        mb={8}
      >
        <Stack flex="1" mb={{ base: 5, md: 0 }} alignSelf={"center"}>
          <MoviePoster
            posterPath={movieDetail.poster_path}
            title={movieDetail.title}
          />
        </Stack>
        <Stack flex="1" align="stretch">
          <Stack>
            <MovieHeader
              title={movieDetail.title}
              overview={movieDetail.overview}
            />
            <MovieTrailer trailer={officialTrailer} />
          </Stack>
          <Stack
            flex="1"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
          >
            <GenreList genres={movieDetail.genres} />
          </Stack>
        </Stack>
      </Box>
      <CastList cast={movieDetail.credits.cast} />
    </Container>
  );
};

export default MovieDetailapi;
