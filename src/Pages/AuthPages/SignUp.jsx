import { Container } from "@chakra-ui/react";
import React from "react";
import SignUp from "../../Components/Auth/SignUp";

 const SignUpPage = () => {
  return (
    <Container
      maxW={{
        sm: "container.sm",
        md: "container.md",
        lg: "container.md",
        xl: "container.lg",
      }}
    >
        <SignUp/>
    </Container>
  );
};
export default SignUpPage;