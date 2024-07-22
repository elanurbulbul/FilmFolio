import React, { useState } from "react";
import { Button, Input, Box, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const toast = useToast();


  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      toast({
        position: 'top',
        containerStyle: {
          width: '800px',
          maxWidth: '100%',
        },
        title: "Please enter a search term.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  

  return (
    <>
    <Box>
      <Input
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        mb="4"
      />
      <Button onClick={handleSearch} colorScheme="blue">
        Search
      </Button>

    </Box>
    </>
  );
};

export default Homepage;
