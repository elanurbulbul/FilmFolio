import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Components/Context/AuthContext";
import { Box, Input, Button, Heading, Text, Link } from "@chakra-ui/react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = () => {
    // LocalStorage'dan kullanıcı bilgilerini al
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Kullanıcı var mı ve e-posta eşleşiyor mu?
    if (storedUser && storedUser.email === email) {
      if (email && password) {
        const userData = { email };
        signIn(userData);
        navigate("/homepage");
      }
    } else {
      // Kullanıcı yoksa veya e-posta eşleşmiyorsa, uyarı mesajı göster
      setError("Email bulunamadı. Lütfen önce kaydolun.");
    }
  };

  return (
    <Box>
      <Heading>Sign In</Heading>
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
  );
}
