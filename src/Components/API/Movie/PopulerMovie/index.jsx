import React, { useEffect, useState } from "react";
import List from "../../../MovieCards/list";
import { Box } from "@chakra-ui/react";

const PopulerMovie = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    
    fetch(
      `${import.meta.env.VITE_API_BASE_URL}/discover/movie?api_key=${import.meta.env.VITE_API_KEY}`    )
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

export default PopulerMovie;
