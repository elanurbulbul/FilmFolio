import React from "react";
import PersonDetailapi from "../../Components/API/Person/PersonDetailapi" ;
import { Container } from "@chakra-ui/react";


const PersonDetail = () => {
  return (
    <Container
    maxW={{
      sm:"container.sm",
      md: "container.md",
      lg: "container.md",
      xl: "container.lg",
    }}
    >
    <PersonDetailapi />
  </Container>
  );
};
export default PersonDetail;