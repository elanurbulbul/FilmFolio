import React, { useState } from "react";
import { Button, Input, Box, useToast, Switch, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import DailyMovie from "../../Components/API/Trending/MoviesTrending/DailyMovie";
import WeeklyMovie from "../../Components/API/Trending/MoviesTrending/WeeklyMovie";
import MoviesTrending from "../../Components/API/Trending/MoviesTrending/MoviesTrending";
import TvTrending from "../../Components/API/Trending/TvTrending/TvShowsTrending";

const Homepage = () => {
  const [isWeekly, setIsWeekly] = useState(false); // Yeni state
 

 

  const handleToggle = () => {
    setIsWeekly(!isWeekly);
  };

  return (
    <>
      
     <MoviesTrending/>
     <TvTrending/>
    </>
  );
};

export default Homepage;
