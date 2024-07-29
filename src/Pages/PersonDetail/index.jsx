import React from "react";
import PersonDetailapi from "../../Components/API/Person/PersonDetailapi" ;

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