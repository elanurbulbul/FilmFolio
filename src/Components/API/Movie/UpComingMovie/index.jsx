import React, { useEffect, useState } from "react";
import List from "../../../AllCards/MovieCards/list";
import { Box, Spinner, Center,Heading } from "@chakra-ui/react";

const UpComingMovie = ({onDataLoaded}) => {
  const [movieList, setMovieList] = useState([]);


  const getMovie = () => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/movie/upcoming?language=en-US&page=1&api_key=${import.meta.env.VITE_API_KEY}`;

    fetch(apiUrl)
    .then((res) => res.json())
    .then((json) => {
      setMovieList(json.results);
      onDataLoaded();
    })
    .catch((error) => {
      console.error("Error fetching TV shows:", error);
      onDataLoaded();
   });

  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <Box p="3">
   
      <Heading px="2px" mt={20}  as="h4" fontWeight="500" textAlign="start">Up Coming</Heading>
      <List movieList={movieList} />
 
  </Box>
  );
};

export default UpComingMovie;
