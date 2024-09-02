import { Container } from "@chakra-ui/react";
import React from "react";
import SignUp from "../../Components/Auth/SignUp";

 const SignUpPage = () => {
  return (
    <Container
      maxW="xl"
    >
        <SignUp/>
    </Container>
  );
};
export default SignUpPage;