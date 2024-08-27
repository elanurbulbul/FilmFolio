import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { Spinner, Stack, Text, Center,Link, Flex, Box, Button } from "@chakra-ui/react";
import MovieHeader from "./MovieHeader";
import MoviePoster from "./MoviePoster";
import GenreList from "../../DetailPageElements/GenreList";
import Trailer from "../../DetailPageElements/Trailer";
import CastList from "../../DetailPageElements/CastList";
import Company from "../../DetailPageElements/Companies";
import VideoList from "../../DetailPageElements/Videos";
import RecommendationList from "../../DetailPageElements/RecommendationList";
import { useNavigate } from "react-router-dom";


const MovieDetailapi = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [showAlert, setShowAlert] = useState(false);


  const getMovieDetail = () => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/movie/${movieId}?append_to_response=videos,vote_average,release_date,genres,images,people,credits,recommendations&language=en-US&api_key=${import.meta.env.VITE_API_KEY}`;

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

  const addToWatchlist = () => {
    const user = localStorage.getItem("user");

    if (!user) {
      setShowAlert(true); 
      return;
    }

    const storedWatchlist = localStorage.getItem("watchlist");
    const watchlist = storedWatchlist ? JSON.parse(storedWatchlist) : [];

    const updatedWatchlist = [...watchlist, movieDetail];

    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));

    alert(`${movieDetail.title} has been added to your watchlist!`);
  };
  const officialTrailer = movieDetail.videos.results.find(
    (video) => video.type === "Trailer" && video.official
  );

  const hasGenres = movieDetail.genres && movieDetail.genres.length > 0;
  const hasCast = movieDetail.credits && movieDetail.credits.cast && movieDetail.credits.cast.length > 0;
  const hasVideos = movieDetail.videos && movieDetail.videos.results && movieDetail.videos.results.length > 0;
  const hasCompanies = movieDetail.production_companies && movieDetail.production_companies.length > 0;
  const hasRecommendations = movieDetail.recommendations && movieDetail.recommendations.results && movieDetail.recommendations.results.length > 0;

  return (
    <Stack my={20}>
      <Stack>
        <MovieHeader
          title={movieDetail.title}
          homepage={movieDetail.homepage}
        />
        <Flex marginTop="-10px" mb="-5px" align="center">
          <StarIcon color="yellow.400" boxSize="1.2rem" mr={1} />
          <Text fontSize="20px" ml={1}>
            {movieDetail.vote_average.toFixed(2)}
          </Text>
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

      <Stack textAlign="start">
        {hasGenres && (
          <Flex mb="-8px" justifyContent="start" alignItems="center">
            <GenreList
              release_date={movieDetail.release_date}
              genres={movieDetail.genres}
            />
          </Flex>
        )}

        <MovieHeader overview={movieDetail.overview} />
      </Stack>
      <Box mt={1} textAlign="start">
        <Button onClick={addToWatchlist}>Add Watchlist</Button>
      </Box>

      {showAlert && (
        <Box mt={4} p={4} bg={"gray.600"} borderRadius="md">
          <Text>You need to sign in to add items to your watchlist.</Text>
          <Link color="blue.500" onClick={() => navigate("/signIn")}>
            Click here to sign in.
          </Link>
        </Box>
      )}

      <Stack mt="50px" pb={2}>
        {hasCast && <CastList cast={movieDetail.credits.cast} />}
        {hasVideos && <VideoList videos={movieDetail.videos.results} />}
        {hasCompanies && <Company companies={movieDetail.production_companies} />}
        {hasRecommendations && (
          <RecommendationList
            recommendations={movieDetail.recommendations.results}
          />
        )}
      </Stack>
    </Stack>
  );
};

export default MovieDetailapi;
