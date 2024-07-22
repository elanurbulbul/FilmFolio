import React, { useState } from "react";
import { Box, Text, Switch, Flex } from "@chakra-ui/react";
import WeeklyTv from "./WeeklyTvShow";
import DailyTv from "./DailyTvShow";


const TvTrending = () => {
  const [isWeekly, setIsWeekly] = useState(false);

  const handleToggle = () => {
    setIsWeekly(!isWeekly);
  };

  return (
    <Box my={4}>
      <Flex justifyContent="space-between" alignItems="center"  mx={5}>
        <Text fontSize="30px" >
          {isWeekly ? "Weekly Tv Shows" : "Daily Tv Shows"}
        </Text>
        <Switch
          colorScheme="teal"
          size="lg"
          isChecked={isWeekly}
          onChange={handleToggle}
        />
      </Flex>
      <Box>
        {isWeekly ? <WeeklyTv /> : <DailyTv />}
      </Box>
    </Box>
  );
};

export default TvTrending;
