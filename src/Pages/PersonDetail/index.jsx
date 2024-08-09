import React from "react";
import PersonDetailapi from "../../Components/API/Person/PersonDetailapi" ;
import { Container } from "@chakra-ui/react";


const PersonDetail = () => {
  return (
    <Container
      maxW={{
        base: "container.sm",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
      }}
    >
    <PersonDetailapi />
  </Container>
  );
};
export default PersonDetail;