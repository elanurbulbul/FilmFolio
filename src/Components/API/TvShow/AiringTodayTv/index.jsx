import React, { useEffect, useState } from "react";
import List from "../../../AllCards/TvShowCards/list";
import { Box, Spinner, Center, Container, Stack } from "@chakra-ui/react";

const AiringToday = () => {
  const [tvList, setTvList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTv = () => {
    fetch(
      `${import.meta.env.VITE_API_BASE_URL}/tv/on_the_air?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((json) => {
        setTvList(json.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching TV shows:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getTv();
  }, []);

  return (
    <Stack >
      {loading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : (
        <List tvList={tvList} />
      )}
    </Stack>
  );
};

export default AiringToday;
