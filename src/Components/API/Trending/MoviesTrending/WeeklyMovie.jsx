import { Heading, Box, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MovieList from "../../../AllCards/MovieCards/list";

const WeeklyMovie = () => {
  const [weeklyMovie, setWeeklyMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTrend = () => {
    fetch(
      `${import.meta.env.VITE_API_BASE_URL}/trending/movie/week?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((json) => {
        setWeeklyMovie(json.results);
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
      <MovieList movieList={weeklyMovie} />
    </Box>
  );
};

export default WeeklyMovie;
