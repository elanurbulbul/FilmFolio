import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Spinner, Stack, Center, Text,Link, Flex, Button } from "@chakra-ui/react";
import { TVShowName, TVShowDetails } from "./TvShowHeader";
import TvShowPoster from "./TvShowPoster";
import CastList from "../../DetailPageElements/CastList";
import GenreList from "../../DetailPageElements/GenreList";
import Trailer from "../../DetailPageElements/Trailer";
import Company from "../../DetailPageElements/Companies";
import RecommendationList from "../../DetailPageElements/RecommendationList";
import VideoList from "../../DetailPageElements/Videos";
import { StarIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";


const TvShowDetailapi = () => {
  const navigate = useNavigate();
  const { tvId } = useParams();
  const [tvShowDetail, setTvShowDetail] = useState(null);
  const [showAlert, setShowAlert] = useState(false);


  const getTvShowDetail = () => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/tv/${tvId}?append_to_response=videos,genres,images,people,credits,recommendations&language=en-US&api_key=${import.meta.env.VITE_API_KEY}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setTvShowDetail(data))
      .catch((err) => console.error("Error fetching TV show details:", err));
  };

  useEffect(() => {
    getTvShowDetail();
  }, [tvId]);

  if (!tvShowDetail) {
    return (
      <Center height="100vh">
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="gray.400" size="xl" />
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

    const updatedWatchlist = [...watchlist, tvShowDetail];

    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));

    alert(`${tvShowDetail.name} has been added to your watchlist!`);
  };

  const officialTrailer = tvShowDetail.videos.results.find(
    (video) => video.type === "Trailer" && video.official
  );

  const hasGenres = tvShowDetail.genres && tvShowDetail.genres.length > 0;
  const hasCast = tvShowDetail.credits && tvShowDetail.credits.cast && tvShowDetail.credits.cast.length > 0;
  const hasVideos = tvShowDetail.videos && tvShowDetail.videos.results && tvShowDetail.videos.results.length > 0;
  const hasCompanies = tvShowDetail.production_companies && tvShowDetail.production_companies.length > 0;
  const hasRecommendations = tvShowDetail.recommendations && tvShowDetail.recommendations.results && tvShowDetail.recommendations.results.length > 0;

  return (
    <Stack my={20}>
      <Stack>
        <TVShowName name={tvShowDetail.name} />
        <Flex marginTop="-10px" mb="-5px" align="center">
          <StarIcon color="yellow.400" boxSize="1.3rem" mr={1} />
          <Text fontSize="20px" ml={1}>{tvShowDetail.vote_average.toFixed(2)}</Text>
        </Flex>

        <Flex>
          <TvShowPoster posterPath={tvShowDetail.poster_path} title={tvShowDetail.name} />
        
            <Trailer title={tvShowDetail.name} trailer={officialTrailer} posterPath={tvShowDetail.poster_path} />
        
        </Flex>
      </Stack>

      <Stack>
        {hasGenres && (
          <Flex mb="-8px" justifyContent="start" alignItems="center">
            <GenreList first_air_date={tvShowDetail.first_air_date} genres={tvShowDetail.genres} />
          </Flex>
        )}
        <TVShowDetails
          overview={tvShowDetail.overview}
          seasons={tvShowDetail.number_of_seasons}
          episodes={tvShowDetail.number_of_episodes}
        />
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
      <Stack pb={2} mt="50px">
        {hasCast && <CastList cast={tvShowDetail.credits.cast} />}
        {hasVideos && <VideoList videos={tvShowDetail.videos.results} />}
        {hasCompanies && <Company companies={tvShowDetail.production_companies} />}
        {hasRecommendations && <RecommendationList recommendations={tvShowDetail.recommendations.results} />}
      </Stack>
    </Stack>
  );
};

export default TvShowDetailapi;
