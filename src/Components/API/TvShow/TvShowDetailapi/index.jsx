import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Spinner, Stack, Center, Text, Flex } from "@chakra-ui/react";
import { TVShowName, TVShowDetails } from "./TvShowHeader";
import TvShowPoster from "./TvShowPoster";
import CastList from "../../DetailPageElements/CastList";
import GenreList from "../../DetailPageElements/GenreList";
import Trailer from "../../DetailPageElements/Trailer";
import Company from "../../DetailPageElements/Companies";
import RecommendationList from "../../DetailPageElements/RecommendationList";
import VideoList from "../../DetailPageElements/Videos";
import { StarIcon } from "@chakra-ui/icons";

const TvShowDetailapi = () => {
  const { tvId } = useParams();
  const [tvShowDetail, setTvShowDetail] = useState(null);

  const getTvShowDetail = () => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL
      }/tv/${tvId}?append_to_response=videos,genres,images,people,credits,recommendations&language=en-US&api_key=${import.meta.env.VITE_API_KEY
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
      <Center height="100vh">
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="gray.400" size="xl" />
      </Center>
    );
  }

  const officialTrailer = tvShowDetail.videos.results.find(
    (video) => video.type === "Trailer" && video.official
  );

  return (
    <Stack  my={20}>
      <Stack>
        <TVShowName name={tvShowDetail.name} />
        <Flex marginTop="-20px" align="center">
          <StarIcon color="yellow.400" boxSize="1.3rem" mr={1} />
          <Text fontSize="20px" ml={1}>{tvShowDetail.vote_average.toFixed(2)}</Text>
        </Flex>


        <Flex>
          <TvShowPoster posterPath={tvShowDetail.poster_path} title={tvShowDetail.name} />
          <Trailer title={tvShowDetail.name} trailer={officialTrailer} posterPath={tvShowDetail.poster_path} />
        </Flex>
      </Stack>



      <Stack>
      <Flex justifyContent="start" alignItems="center">
      
          <GenreList first_air_date={tvShowDetail.first_air_date} genres={tvShowDetail.genres} />

        </Flex>
        <TVShowDetails
          overview={tvShowDetail.overview}
          seasons={tvShowDetail.number_of_seasons}
          episodes={tvShowDetail.number_of_episodes}
        />
      </Stack>





      <Stack pb={2} ></Stack>

      <CastList cast={tvShowDetail.credits.cast} />
      <VideoList videos={tvShowDetail.videos.results} />
      <Company companies={tvShowDetail.production_companies} />
      <RecommendationList recommendations={tvShowDetail.recommendations.results} />
    </Stack>
  );
};

export default TvShowDetailapi;
