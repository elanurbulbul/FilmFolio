import { Heading, Box, Spinner, Center, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DailyMovie from "./DailyMovie";
import DailyTv from "./DailyTvShow";

const DailyTrend = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); 
  }, []);
  return (
    <Box>
      {loading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : (
        <Stack>
          <Heading as="h1" mb={5}>
            Daily Trends
          </Heading>
          <Stack>
            {" "}
            <DailyMovie />
          </Stack>
          <DailyTv />
        </Stack>
      )}
    </Box>
  );
};

export default DailyTrend;
