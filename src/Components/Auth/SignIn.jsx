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
    const storedUser = JSON.parse(localStorage.getItem(`user_${email}`));
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email address.");
      return;
    }
    if (storedUser) {
      if (storedUser.password === password) {
        signIn(storedUser);
        navigate("/welcome"); 
      } else {
        setError("Email is registered, please try the password again.");
      }
    } else {
      setError("Email is not registered, please sign up.");
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
            {error}
            {error === "Email is not registered, please sign up." && (
              <Text>
                <Link color="gray.600" onClick={() => navigate("/signup")}>
                  Sign Up
                </Link>
              </Text>
            )}
          </Text>
        )}

      </Box>
    </Center>
  );
}
