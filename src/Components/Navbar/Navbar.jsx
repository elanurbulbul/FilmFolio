import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  HStack,
  Button,
  Collapse,
  Icon,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  Container,
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
import { useAuth } from "../Context/AuthContext";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { FcFilmReel } from "react-icons/fc";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const { user, signOut } = useAuth();

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

  const handleLogout = async () => {
    try {
      await signOut();
      toast({
        title: "Logged out successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      navigate("/homepage");
    } catch (error) {
      toast({
        title: "Failed to log out.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Container
      maxW={{
        base: "container.sm",
        md: "container.lg",
        lg: "container.lg",
        xl: "container.xl",
      }}
    >
      <Box zIndex={10} position="relative">
        <Flex
          spacing={5}
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 1 }}
          px={{ base: 0 }}
          borderBottom={1}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              style={{ marginLeft: "-10px" }}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
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
              display={{ base: "none", md: "block" }}
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
                  icon={<SearchIcon />}
                  aria-label="Search"
                  onClick={handleSearch}
                  bg={useColorModeValue("gray.300", "gray.500")}
                  _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
                  size="md"
                  borderRadius="md"
                />
              </InputRightElement>
            </InputGroup>
            {user ? (
              <Button
                display={{ base: "none", lg: "inline-flex" }}
                onClick={handleLogout}
              >
                Sign Out
              </Button>
            ) : (
              <>
                {" "}
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={600}
                  variant={"link"}
                  href={"/sign-in"}
                  display={{ base: "none", lg: "inline-flex" }}
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  Sign In
                </Button>
                <Button
                  as={"a"}
                  px={5}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"pink.400"}
                  href={"/sign-up"}
                  _hover={{
                    bg: "pink.300",
                  }}
                  display={{ base: "none", lg: "inline-flex" }}
                >
                  Sign Up
                </Button>
              </>
            )}
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
                {user ? (
                  <MenuItem
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    onClick={handleLogout}
                  >
                    Sign Out
                  </MenuItem>
                ) : (
                  <>
                    <MenuItem as={RouterLink} to="/sign-in">
                      Sign In
                    </MenuItem>
                    <MenuItem as={RouterLink} to="/sign-up">
                      Sign Up
                    </MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>
          </HStack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </Container>
  );
}
