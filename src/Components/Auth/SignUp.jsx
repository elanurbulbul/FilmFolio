import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Input,
  Button,
  Heading,
  Center,
  Text,
  FormControl,
  FormLabel,
  Stack,
  Container,
  HStack,
  Divider,
  Checkbox,
  Link,
} from "@chakra-ui/react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!name || !email || !password) {
      setError("Name, email and password are required.");
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

    navigate("/sign-in");
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6 && /[a-zA-Z]/.test(password) && /\d/.test(password);
  };

  return (
    <Box mt={5} mb={10} py={{ base: "12", md: "24" }} px={{ base: "0", sm: "8" }}>
      <Stack spacing="8">
        <Stack spacing="6" textAlign="center">
          <Heading size= "lg" >Create a new account</Heading>
          <Text color="gray.500">
            Already have an account? <Link color="blue.500" href="/sign-in">Sign in</Link>
          </Text>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg="transparent"
          boxShadow={{ base: "none", sm: "xl" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </Stack>
            {error && <Text color="red.500" mb={4}>{error}</Text>}
            
            <Stack spacing="6">
              <Button  bg="gray.500" onClick={handleSignUp}>Sign Up</Button>
              
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
