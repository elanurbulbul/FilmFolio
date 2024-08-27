import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Input, Button, Heading, Center } from "@chakra-ui/react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (email && password) {
      const userData = { email };

      localStorage.setItem("user", JSON.stringify(userData));

      navigate("/signin");
    }
  };

  return (
    <Center height="100vh">
       <Box>
      <Heading mb={2}>Sign Up</Heading>
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
       my={2}
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleSignUp}>Sign Up</Button>
    </Box>
    </Center>
   
  );
}
