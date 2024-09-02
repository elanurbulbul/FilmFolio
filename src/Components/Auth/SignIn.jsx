import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import {
  Box,
  Input,
  Button,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Stack,
  Container,
  HStack,
  Divider,
  Checkbox,
} from "@chakra-ui/react";

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
    <Box
      mt={5}
      mb={10}
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6" textAlign="center">
          <Heading size="lg">Sign in to your account</Heading>
          <Text color="gray.500">
            Don't have an account?{" "}
            <Link color="blue.500" href="/sign-up">
              Sign up
            </Link>
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
            {error && (
              <Text color="red.500" mb={4}>
                {error}
                {error === "Email is not registered, please sign up." && (
                  <Text>
                    <Link color="blue.500" onClick={() => navigate("/sign-up")}>
                      Sign Up
                    </Link>
                  </Text>
                )}
              </Text>
            )}

            <Stack spacing="6">
              <Button bg="gray.500" onClick={handleSignIn}>
                Sign In
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
