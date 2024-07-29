import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Spinner, Stack, Flex, Center,Text } from "@chakra-ui/react";
import MovieHeader from "./MovieHeader";
import MoviePoster from "./MoviePoster";
import CastList from "../../DetailPageElements/CastList";
import GenreList from "../../DetailPageElements/GenreList";
import Trailer from "../../DetailPageElements/Trailer";
import "./index.scss";

const MovieDetailapi = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  const getMovieDetail = () => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/movie/${movieId}?append_to_response=videos,vote_average,release_date,genres,images,people,credits,recommendations&language=en-US&api_key=${import.meta.env.VITE_API_KEY}`

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
      <Center >
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

  const officialTrailer = movieDetail.videos.results.find(
    (video) => video.type === "Trailer" && video.official
  );

  return (
    <Stack>
      <Card 
        p={2}
        borderRadius="lg"
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
            <Trailer title={movieDetail.title} trailer={officialTrailer} />
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
      </Card>
      <Text>{movieDetail.release_date}</Text>
      <CastList cast={movieDetail.credits.cast} />
    </Stack>
  );
};

export default MovieDetailapi;
