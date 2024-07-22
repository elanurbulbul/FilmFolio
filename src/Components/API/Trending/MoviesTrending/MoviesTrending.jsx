import React, { useState } from "react";
import { Box, Text, Switch, Flex } from "@chakra-ui/react";
import DailyMovie from "./DailyMovie";
import WeeklyMovie from "./WeeklyMovie";

const MoviesTrending = () => {
  const [isWeekly, setIsWeekly] = useState(false);

  const handleToggle = () => {
    setIsWeekly(!isWeekly);
  };

  return (
    <Box my="50px" >
      <Flex justifyContent="space-between" alignItems="center"  mx={5}>
        <Text fontSize="30px" >
          {isWeekly ? "Weekly Movies" : "Daily Movies"}
        </Text>
        <Switch
          colorScheme="teal"
          size="lg"
          isChecked={isWeekly}
          onChange={handleToggle}
        />
      </Flex>
      <Box>
        {isWeekly ? <WeeklyMovie /> : <DailyMovie />}
      </Box>
    </Box>
  );
};

export default MoviesTrending;
