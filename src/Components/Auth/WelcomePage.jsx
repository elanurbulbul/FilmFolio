import React, { useEffect } from "react";
import { Box, Heading, Text, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Welcome = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/homepage");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Center height="100vh">
      <Box textAlign="center">
        {user && (
          <>
            <Heading mb={4}>Welcome, {user.name}!</Heading>
            <Text>Redirecting to homepage...</Text>
          </>
        ) }
      </Box>
    </Center>
  );
};

export default Welcome;
