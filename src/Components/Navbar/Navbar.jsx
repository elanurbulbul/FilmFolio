import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Button,
  Collapse,
  Icon,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Menu,
  HStack,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { FcFilmReel } from "react-icons/fc";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
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
    <Box zIndex={10} position="relative">
      <Flex
        spacing={5}
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 1 }}
        px={{ base: 3 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          mr={3}
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
        >
          <Icon
            as={FcFilmReel}
            w={8}
            h={8}
            marginRight={"10px"}
            alignSelf={"center"}
          />

          <Text
            as={RouterLink}
            whiteSpace="nowrap"
            to="/"
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"monospace"}
            cursor={"pointer"}
            fontWeight={"900"}
            fontSize={"20px"}
            color={useColorModeValue("gray.800", "white")}
            _hover={{
              textDecoration: "none",
              color: useColorModeValue("gray.800", "white"),
            }}
          >
            FILM FOLIO
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <HStack
          display="flex"
          spacing={5}
          flex={{ base: "1" }}
          justify={"flex-end"}
        >
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <InputGroup
            width="100%"
            borderRadius="md"
            maxWidth="2800px"
            display={{ base: "none", md: "block" }} // Only show on medium and larger screens
          >

            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={handleInputChange}
              color={useColorModeValue("gray.800", "white")}
              bg={useColorModeValue("gray.200", "gray.600")}
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
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"/signIn"}
            display={{ base: "none", lg: "inline-flex" }}
            _hover={{
              textDecoration: "none",
            }}
          >
            Sign In
          </Button>
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            href={"/signUp"}
            _hover={{
              bg: "pink.300",
            }}
            display={{ base: "none", lg: "inline-flex" }}
          >
            Sign Up
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
              display={{ base: "inline-flex", lg: "none" }}
              _hover={{
                color: "pink.400",
              }}
            >
              <Icon
                as={FaUser}
                w={6}
                h={6}
                display={"flex"}
                alignSelf={"center"}
              />
            </MenuButton>
            <MenuList>
              <MenuItem as={"a"} href={"/signIn"}>
                Sign In
              </MenuItem>
              <MenuItem as={"a"} href={"/signUp"}>
                Sign Up
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
