import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import {
  Spinner,
  Stack,
  Link,
  Center,
  Text,
  Flex,
} from "@chakra-ui/react";
import MovieHeader from "./MovieHeader";
import MoviePoster from "./MoviePoster";
import GenreList from "../../DetailPageElements/GenreList";
import Trailer from "../../DetailPageElements/Trailer";
import "./index.scss";
import CastList from "../../DetailPageElements/CastList";

const MovieDetailapi = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  const getMovieDetail = () => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL
      }/movie/${movieId}?append_to_response=videos,vote_average,release_date,genres,images,people,credits,recommendations&language=en-US&api_key=${import.meta.env.VITE_API_KEY
      }`;

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

  const officialTrailer = movieDetail.videos.results.find(
    (video) => video.type === "Trailer" && video.official
  );

  return (
    <Stack my={20}>
      <Stack>
        <MovieHeader title={movieDetail.title} homepage={movieDetail.homepage} />
        <Flex align="center">
          <StarIcon color="yellow.400" boxSize="1.2rem" />
          <Text fontSize="20px" ml={1}>{movieDetail.vote_average.toFixed(2)}</Text>
        </Flex>

        <Flex>
          <MoviePoster
            posterPath={movieDetail.poster_path}
            title={movieDetail.title}
          />

          <Trailer
            title={movieDetail.title}
            trailer={officialTrailer}
            posterPath={movieDetail.poster_path}
          />
        </Flex>
      </Stack>

      <Stack pt={2}>
        <Text textAlign="start" fontSize="18px" fontFamily="inherit">{movieDetail.release_date}</Text>
        <GenreList genres={movieDetail.genres} />
      </Stack>

      <Stack py={2} textAlign="start">
        <Text fontWeight="600" fontSize="25px">
          Summary
        </Text>
        <MovieHeader overview={movieDetail.overview} />
      </Stack>
      <CastList cast={movieDetail.credits.cast}/>
    </Stack>
  );
};

export default MovieDetailapi;
