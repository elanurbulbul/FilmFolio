import React, { useState } from "react";
import { Box, Text, Switch, Flex, Stack, Heading } from "@chakra-ui/react";
import DailyMovie from "./DailyMovie";
import WeeklyMovie from "./WeeklyMovie";

const MoviesTrending = () => {
  const [isWeekly, setIsWeekly] = useState(false);

  const handleToggle = () => {
    setIsWeekly(!isWeekly);
  };

  return (
    <Box my="50px" >
      <Flex justifyContent="space-between" alignItems="center" mx={3}>
        <Stack direction="column" display="flex">
        <Heading textAlign="start" fontSize={{base:"22px", md:"30px"}}>TOP 20 MOVIES</Heading>
        </Stack>
       

        <Stack fontSize={{base:"16px", md:"20px"}} direction="row" display={"flex"} alignItems={"center"} spacing={1.5}>
          <Text>DAILY</Text>
          <Switch
          size={{base:"md", md:"lg"}}
            colorScheme="teal"
            isChecked={isWeekly}
            onChange={handleToggle}
          />
          <Text >WEEKLY</Text>
        </Stack>
      </Flex>
      <Text mx={3} mt={2}  textAlign="start" fontSize={{base:"16px", md:"20px"}} >You can see weekly or daily movies...</Text>
      <Box>
        {isWeekly ? <WeeklyMovie /> : <DailyMovie />}
      </Box>
    </Box>
  );
};

export default MoviesTrending;
