import React, { useEffect, useState } from "react";
import List from "../../../MovieCards/list";
import { Box } from "@chakra-ui/react";

const TopRatedMovie = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/movie/top_rated?language=en-US&page=1&api_key=${import.meta.env.VITE_API_KEY}`;

    fetch(apiUrl)
    .then((res) => res.json())
    .then((json) => setMovieList(json.results))
    .catch((error) => console.error("Error fetching movies:", error));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <Box p="4">
      
      <List movieList={movieList} />
    </Box>
  );
};

export default TopRatedMovie;
