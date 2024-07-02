import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Spinner, Stack, VStack } from "@chakra-ui/react";
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
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=videos,genres,images,people,credits,recommendations&language=en-US&api_key=caf0f1e593b52bdbc2ca284e307ccbc3`
    )
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
      <Stack
        direction={{ base: "column-reverse", md: "row" }} // Mobilde column, büyük ekranda row
        align={{ base: "center", md: "stretch" }}
        spacing={5}
        mb={8}
      >
        <Box flex="1" mb={{ base: 5, md: 0 }} alignSelf={"center"}>
          <MoviePoster
            posterPath={movieDetail.poster_path}
            title={movieDetail.title}
          />
        </Box>
        <VStack flex="1" align="stretch">
          <Box>
            <MovieHeader
              title={movieDetail.title}
              overview={movieDetail.overview}
            />
            <MovieTrailer trailer={officialTrailer} />
          </Box>
          <Box
            flex="1"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
          >
            <GenreList genres={movieDetail.genres} />
          </Box>
        </VStack>
      </Stack>
      <CastList cast={movieDetail.credits.cast} />
    </Container>
  );
};

export default MovieDetailapi;
