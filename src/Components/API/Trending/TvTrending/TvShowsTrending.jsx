import React, { useState } from "react";
import { Box, Text, Switch, Flex, Stack } from "@chakra-ui/react";
import WeeklyTv from "./WeeklyTvShow";
import DailyTv from "./DailyTvShow";

const TvTrending = () => {
  const [isWeekly, setIsWeekly] = useState(false);

  const handleToggle = () => {
    setIsWeekly(!isWeekly);
  };

  return (
    <Box my={4}>
      <Flex justifyContent="flex-end" alignItems="center" mx={5}>
       
        <Stack direction="row" alignItems="center" spacing={2}>
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
        {isWeekly ? <WeeklyTv /> : <DailyTv />}
      </Box>
    </Box>
  );
};

export default TvTrending;
