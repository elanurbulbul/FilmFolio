import { Heading, Box, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MovieList from "../../../AllCards/MovieCards/list";

const DailyMovie = () => {
  const [dailyMovie, setDailyMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTrend = () => {
    fetch(
      `${import.meta.env.VITE_API_BASE_URL}/trending/movie/day?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((json) => {
        setDailyMovie(json.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching trending data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getTrend();
  }, []);

  if (loading) {
    return <Spinner size="xl" />;
  }

  return (
    <Box px={3}>
        <MovieList movieList={dailyMovie} />
    </Box>
  );
};

export default DailyMovie;
