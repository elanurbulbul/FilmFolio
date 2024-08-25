import React, { useEffect, useState } from "react";
import List from "../../../AllCards/MovieCards/list";
import { Box, Heading } from "@chakra-ui/react";

const PopulerMovie = ({ onDataLoaded }) => {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/movie/popular?language=en-US&page=1&api_key=${import.meta.env.VITE_API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        setMovieList(json.results);
        onDataLoaded(); 
      })
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
        onDataLoaded(); 
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <Box px="3" pt={2}>
      <Heading px="2px" mt={{base:"15px", md:"40px"}} as="h4" fontWeight="500" textAlign="start">Populer </Heading>
      <List movieList={movieList} />
    </Box>
  );
};

export default PopulerMovie;
