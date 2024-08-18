import React from "react";
import PopularPeople from "../../Components/API/Person/PopularPeople"
import { Container, Box, Heading } from "@chakra-ui/react";
import PersonSearch from "../../Components/API/Search/PersonSearch";

const People = () => {
  return (
    <Container maxW={{ base: 'container.sm', md: "container.lg", lg: "container.lg", xl: "container.xl" }}>
        <Box my={10} px={3}>
            <Heading textAlign="start" mb={3}>
                FAMOUS PEOPLE
            </Heading>

            <PersonSearch/>
            <PopularPeople/>

        </Box>
    </Container>
   
  );
};
export default People;