import React, { useState } from 'react';
import MobileNavItem from './MobileNavItem';
import { NAV_ITEMS } from './NavItem';
import {
  Stack,
  useColorModeValue,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const MobileNav = () => {
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
        position: "top",
        containerStyle: {
          width: "800px",
          maxWidth: "100%",
        },
        title: "Please enter a search term.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      <InputGroup bg="gray.600" mb={2}>
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          color="white"
        />
        <InputRightElement>
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            onClick={handleSearch}
            bg="transparent"
            _hover={{ bg: "transparent" }}
          />
        </InputRightElement>
      </InputGroup>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;
