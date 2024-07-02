import React from "react";
import { Box, Flex, Text, Link, Icon, Stack } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.700" color="white" py={8}>
      <Flex direction="column" align="center" mx="auto" maxW="1200px" px={4}>
        <Stack direction="row" spacing={6} mb={8}>
          <Link href="#" _hover={{ color: "pink.400" }}>Terms Of Use</Link>
          <Link href="#" _hover={{ color: "pink.400" }}>Privacy Policy</Link>
          <Link href="#" _hover={{ color: "pink.400" }}>About</Link>
          <Link href="#" _hover={{ color: "pink.400" }}>Blog</Link>
          <Link href="#" _hover={{ color: "pink.400" }}>FAQ</Link>
        </Stack>
        <Text fontSize="sm" opacity="0.7" textAlign="center" mb={8}>
          Made By Elanur Bülbül (FrontEnd Developer).
        </Text>
        <Flex justify="center"  spacing={4}>
          <Link href="https://github.com/elanurbulbul" isExternal>
            <Icon as={FaGithub} w={6} h={6} marginRight={'10px'} _hover={{ color: "pink.400", boxShadow: "0 0 10px pink.400" }} />
          </Link>
          <Link href="https://gitlab.com/elanurbulbul" isExternal>
            <Icon as={FaGitlab} w={6} h={6} marginRight={'10px'} _hover={{ color: "pink.400", boxShadow: "0 0 10px pink.400" }} />
          </Link>
          <Link href="https://www.instagram.com/elanr_bulbull/" isExternal>
            <Icon as={FaInstagram} w={6} h={6} marginRight={'10px'} _hover={{ color: "pink.400", boxShadow: "0 0 10px pink.400" }} />
          </Link>
          <Link href="https://twitter.com/Elanrbulbull" isExternal>
            <Icon as={FaTwitter} w={6} h={6} marginRight={'10px'} _hover={{ color: "pink.400", boxShadow: "0 0 10px pink.400" }} />
          </Link>
          <Link href="https://www.linkedin.com/in/elanur-bulbul/" isExternal>
            <Icon as={FaLinkedin} w={6} h={6} _hover={{ color: "pink.400", boxShadow: "0 0 10px pink.400" }} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
