import React, { useEffect, useState } from "react";
import List from "../../../AllCards/TvShowCards/list";
import { Box, Heading } from "@chakra-ui/react";

const AiringToday = ({ onDataLoaded}) => {
  const [tvList, setTvList] = useState([]);

  const getTv = () => {
    fetch(
      `${import.meta.env.VITE_API_BASE_URL}/tv/on_the_air?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((json) => {
        setTvList(json.results);
        onDataLoaded(); 
            })
      .catch((error) => {
        console.error("Error fetching TV shows:", error);
        onDataLoaded();       });
  };

  useEffect(() => {
    getTv();
  }, []);

  return (
    <Box px="3">
      <Heading px="2px" mt={{base:"15px", md:"40px"}} as="h4" fontWeight="500" textAlign="start">Airing Today </Heading>
        <List tvList={tvList} />
    </Box>
  );
};

export default AiringToday;
