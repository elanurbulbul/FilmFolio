import React, { useEffect, useState } from "react";
import List from "../../../AllCards/TvShowCards/list";
import { Box, Spinner, Center } from "@chakra-ui/react";


const TopRated = () => {
  const [tvList, setTvList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTv = () => {
    
    fetch(
      `${import.meta.env.VITE_API_BASE_URL}/tv/top_rated?api_key=${import.meta.env.VITE_API_KEY}`
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
    <Box p="3">
      {loading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : (
        <List tvList={tvList} />
      )}
    </Box>
  );
};

export default TopRated;
