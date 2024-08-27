import { Container } from "@chakra-ui/react";
import React from "react";
import SignIn from "../../Components/Auth/SignIn";

 const SignInPage = () => {
  return (
    <Container
      maxW={{
        sm: "container.sm",
        md: "container.md",
        lg: "container.md",
        xl: "container.lg",
      }}
    >
        <SignIn/>
    </Container>
  );
};
export default SignInPage;