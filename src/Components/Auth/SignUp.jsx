import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Input, Button, Heading, Center, Text } from "@chakra-ui/react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!name || !email || !password) {
      setError("Name, email, and password are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters long and contain at least one letter and one number.");
      return;
    }

    const userData = { name, email, password };

    if (localStorage.getItem(`user_${email}`)) {
      setError("User already exists.");
      return;
    }

    localStorage.setItem(`user_${email}`, JSON.stringify(userData));
    localStorage.setItem(`watchlist_${email}`, JSON.stringify({ movies: [], tvShows: [] }));

    navigate("/signin");
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6 && /[a-zA-Z]/.test(password) && /\d/.test(password);
  };

  return (
    <Center height="100vh">
      <Box p={4}>
        <Heading mb={4}>Sign Up</Heading>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          mb={2}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          mb={2}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mb={4}
        />
        {error && <Text color="red.500" mb={4}>{error}</Text>}

        <Button onClick={handleSignUp}>Sign Up</Button>
      </Box>
    </Center>
  );
}
