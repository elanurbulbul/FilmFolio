import React, { useEffect, useState } from "react";
import List from "../../../TvShowCards/list";
import { Box } from "@chakra-ui/react";

const PopulerTvShow = () => {
  const [tvList, setTvList] = useState([]);

  const getTv = () => {
    
    fetch(
      `${import.meta.env.VITE_API_BASE_URL}/tv/airing_today?api_key=${import.meta.env.VITE_API_KEY}`)
      .then((res) => res.json())
      .then((json) => setTvList(json.results))
      .catch((error) => console.error("Error fetching movies:", error));
  };


  useEffect(() => {
    getTv();
  }, []);

  return (
    <Box p="4">
     <List tvList={tvList} /> 
    </Box>
  );
};

export default PopulerTvShow;
