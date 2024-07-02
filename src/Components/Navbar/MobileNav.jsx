import React from 'react';
import MobileNavItem from './MobileNavItem'
import { NAV_ITEMS } from './NavItem';

import {
  // Import necessary components from Chakra UI
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

const MobileNav = () => {

  return (
    <Stack
    bg={useColorModeValue('white', 'gray.800')}
    p={4}
    display={{ md: 'none' }}>
    {NAV_ITEMS.map((navItem) => (
      <MobileNavItem key={navItem.label} {...navItem} />
    ))}
  </Stack>
  );
};

export default MobileNav;
