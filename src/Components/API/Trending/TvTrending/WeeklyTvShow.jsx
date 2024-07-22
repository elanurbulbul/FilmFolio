import { Heading, Box, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TvList from "../../../AllCards/TvShowCards/list";

const WeeklyTv = () => {
  const [weeklyTv, setWeeklyTv] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTrend = () => {
    fetch(
      `${import.meta.env.VITE_API_BASE_URL}/trending/tv/week?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((json) => {
        setWeeklyTv(json.results);
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
      <TvList tvList={weeklyTv} />
    </Box>
  );
};

export default WeeklyTv;
