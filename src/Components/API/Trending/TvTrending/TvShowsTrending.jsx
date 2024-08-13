import React, { useState } from "react";
import { Box, Text, Switch, Flex, Stack, Heading } from "@chakra-ui/react";
import WeeklyTv from "./WeeklyTvShow";
import DailyTv from "./DailyTvShow";

const TvTrending = () => {
  const [isWeekly, setIsWeekly] = useState(false);

  const handleToggle = () => {
    setIsWeekly(!isWeekly);
  };

  return (
    <Box my={4}>
       <Flex justifyContent="space-between" alignItems="center" mx={3}>
        <Stack direction="column" display="flex">
        <Heading whiteSpace={"nowrap"} textAlign="start" fontSize={{base:"22px", md:"30px"}}>TOP 20 SHOWS</Heading>
        </Stack>
       

        <Stack direction="row" display={"flex"} alignItems={"center"} spacing={2}>
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
      <Text mx={3} mt={2}  textAlign="start" fontSize={{base:"10px", md:"18px"}} >You can see weekly or daily tv shows...</Text>
      <Box>
        {isWeekly ? <WeeklyTv /> : <DailyTv />}
      </Box>
    </Box>
  );
};

export default TvTrending;
