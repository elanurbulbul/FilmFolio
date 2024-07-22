import React, { useState } from "react";
import { Button, Input, Box, useToast, Switch, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import DailyMovie from "../../Components/API/Trending/MoviesTrending/DailyMovie";
import WeeklyMovie from "../../Components/API/Trending/MoviesTrending/WeeklyMovie";
import MoviesTrending from "../../Components/API/Trending/MoviesTrending/MoviesTrending";
import TvTrending from "../../Components/API/Trending/TvTrending/TvShowsTrending";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isWeekly, setIsWeekly] = useState(false); // Yeni state
  const navigate = useNavigate();
  const toast = useToast();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      toast({
        position: "top",
        containerStyle: {
          width: "800px",
          maxWidth: "100%",
        },
        title: "Please enter a search term.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleToggle = () => {
    setIsWeekly(!isWeekly);
  };

  return (
    <>
      <Box>
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          mb="4"
        />
        <Button onClick={handleSearch} colorScheme="blue">
          Search
        </Button>
      </Box>
     <MoviesTrending/>
     <TvTrending/>
    </>
  );
};

export default Homepage;
