import React from "react";
import PopularPeople from "../../Components/API/Person/PopularPeople"
import { Container } from "@chakra-ui/react";

const People = () => {
  return (
    <Container  maxW={{base:'container.sm',md:"container.md", lg:"container.lg", xl:"container.xl"}}>
       <PopularPeople/>
    </Container>
   
  );
};
export default People;