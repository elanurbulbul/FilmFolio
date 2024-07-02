import React from 'react';
import {
  // Import necessary components from Chakra UI
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import {
  // Import icons from Chakra UI or react-icons
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';
import { FaUser } from 'react-icons/fa'; // Assuming FaUser is from react-icons
import { Link as RouterLink } from 'react-router-dom'; // RouterLink bileşenini import edin

// Import child components (DesktopNav, MobileNav)
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { FcFilmReel } from 'react-icons/fc';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
    <Flex
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      minH={'60px'}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      align={'center'}>
      <Flex
        flex={{ base: 1, md: 'auto' }}
        ml={{ base: -2 }}
        display={{ base: 'flex', md: 'none' }}>
        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={'ghost'}
          aria-label={'Toggle Navigation'}
        />
      </Flex>
      <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Icon as={FcFilmReel} w={8} h={8} marginRight={'10px'} alignSelf={'center'} />

        <Text
          as={RouterLink} // RouterLink bileşenini kullanın
           to="/" // Anasayfa yoluna yönlendirin
          textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
          fontFamily={'monospace'}
          cursor={'pointer'}
          fontWeight={'900'}
          fontSize={'20px'}
          color={useColorModeValue('gray.800', 'white')}
          _hover={{
            textDecoration: 'none',
            color: useColorModeValue('gray.800', 'white'),
          }}>
          FILM FOLIO
        </Text>

        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          <DesktopNav />
        </Flex>
      </Flex>

      <Stack
        flex={{ base: 1, md: 0 }}
        justify={'flex-end'}
        direction={'row'}
        spacing={6}>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Button
          as={'a'}
          fontSize={'sm'}
          fontWeight={400}
          variant={'link'}
          href={'/signIn'}
          display={{ base: 'none', lg: 'inline-flex' }}
        >
          Sign In
        </Button>
        <Button
          as={'a'}
          fontSize={'sm'}
          fontWeight={600}
          color={'white'}
          bg={'pink.400'}
          href={'/signUp'}
          _hover={{
            bg: 'pink.300',
          }}
          display={{ base: 'none', lg: 'inline-flex' }}
        >
          Sign Up
        </Button>
        <Menu>
          <MenuButton
            as={Button}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}
            display={{ base: 'inline-flex', lg: 'none' }}
            _hover={{
              color: 'pink.400',
            }}
          >
            <Icon as={FaUser} w={6} h={6} display={'flex'} alignSelf={'center'}/>
          </MenuButton>
          <MenuList>
            <MenuItem as={'a'} href={'/signIn'}>Sign In</MenuItem>
            <MenuItem as={'a'} href={'/signUp'}>Sign Up</MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Flex>

    <Collapse in={isOpen} animateOpacity>
      <MobileNav />
    </Collapse>
  </Box>
  );
}
