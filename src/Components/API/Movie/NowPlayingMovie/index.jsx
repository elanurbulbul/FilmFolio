import React, { useEffect, useState } from "react";
import List from "../../../AllCards/MovieCards/list";
import { Box, Spinner, Center } from "@chakra-ui/react";

const NowPlayingMovie = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovie = () => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/movie/now_playing?language=en-US&page=1&api_key=${import.meta.env.VITE_API_KEY}`;

    fetch(apiUrl)
    .then((res) => res.json())
    .then((json) => {
      setMovieList(json.results);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching TV shows:", error);
      setLoading(false);
    });
};

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <Box p="4">
      {loading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : (
        <List movieList={movieList} />
      )}
    </Box>

  );
};

export default NowPlayingMovie;
