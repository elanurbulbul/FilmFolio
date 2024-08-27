import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { Box, Input, Button, Heading, Text, Link, Center } from "@chakra-ui/react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email) {
      if (email && password) {
        const userData = { email };
        signIn(userData);
        navigate("/homepage");
      }
    } else {
      setError("The email was not found. Please register first.");
    }
  };

  return (
    <Center height="100vh">
       <Box>
      <Heading mb={2}>Sign In</Heading>
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
      <Button onClick={handleSignIn}>Sign In</Button>

      {error && (
        <Text color="red" mt={4}>
          {error}{" "}
          <Link color="teal.500" onClick={() => navigate("/signup")}>
            Sign Up
          </Link>
        </Text>
      )}
    </Box>
    </Center>
   
  );
}
