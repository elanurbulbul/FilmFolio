import React, { useEffect, useState } from "react";
import List from "../../../AllCards/MovieCards/list";
import { Box, Spinner, Center, Heading } from "@chakra-ui/react";

const PopulerMovie = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);


  const getMovie = () => {

    fetch(
      `${import.meta.env.VITE_API_BASE_URL}/movie/popular?language=en-US&page=1&api_key=${import.meta.env.VITE_API_KEY}`)
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
    <Box p="3">
      {loading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : (
        <>
          <Heading as="h4" fontWeight="500" textAlign="start">Populer Movies</Heading>
          <List movieList={movieList} />
        </>

      )}
    </Box>
  );
};

export default PopulerMovie;
