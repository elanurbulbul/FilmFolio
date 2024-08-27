import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Input, Button, Heading } from "@chakra-ui/react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Basit bir doğrulama ve kayıt işlemi
    if (email && password) {
      const userData = { email };

      // Kullanıcıyı localStorage'a kaydet
      localStorage.setItem("user", JSON.stringify(userData));

      // Kayıt olduktan sonra SignIn sayfasına yönlendir
      navigate("/signin");
    }
  };

  return (
    <Box>
      <Heading>Sign Up</Heading>
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleSignUp}>Sign Up</Button>
    </Box>
  );
}
