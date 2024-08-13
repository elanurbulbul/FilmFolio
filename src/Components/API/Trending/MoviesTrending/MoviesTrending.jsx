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
        <Heading whiteSpace={"nowrap"} textAlign="start" fontSize={{base:"25px", md:"30px"}}>TOP 20 MOVIES</Heading>
        </Stack>
       

        <Stack direction="row" display={"flex"} alignItems={"center"} spacing={2}>
          <Text fontSize={{base:"md", md:"lg"}}>DAILY</Text>
          <Switch
          size={{base:"md", md:"lg"}}
            colorScheme="teal"
            isChecked={isWeekly}
            onChange={handleToggle}
          />
          <Text fontSize={{base:"md", md:"lg"}} >WEEKLY</Text>
        </Stack>
      </Flex>
      <Text mx={3} mt={2}  textAlign="start" fontSize={{base:"10px", md:"18px"}} >You can see weekly or daily movies...</Text>
      <Box>
        {isWeekly ? <WeeklyMovie /> : <DailyMovie />}
      </Box>
    </Box>
  );
};

export default MoviesTrending;
