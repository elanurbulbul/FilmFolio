import React, { useEffect, useState } from "react";
import List from "./list";
import { Box } from "@chakra-ui/react";

const PopulerMovie = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=caf0f1e593b52bdbc2ca284e307ccbc3"
    )
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
