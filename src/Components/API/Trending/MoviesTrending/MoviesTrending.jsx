import React, { useState } from "react";
import { Box, Text, Switch, Flex, Stack } from "@chakra-ui/react";
import DailyMovie from "./DailyMovie";
import WeeklyMovie from "./WeeklyMovie";

const MoviesTrending = () => {
  const [isWeekly, setIsWeekly] = useState(false);

  const handleToggle = () => {
    setIsWeekly(!isWeekly);
  };

  return (
    <Box my="50px">
      <Flex justifyContent="flex-end" alignItems="center" mx={5}>
        
        <Stack direction="row"  spacing={2}>
          <Text>Daily</Text>
          <Switch
            colorScheme="teal"
            size="lg"
            isChecked={isWeekly}
            onChange={handleToggle}
          />
          <Text>Weekly</Text>
        </Stack>
      </Flex>
      <Box>
        {isWeekly ? <WeeklyMovie /> : <DailyMovie />}
      </Box>
    </Box>
  );
};

export default MoviesTrending;
