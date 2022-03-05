//react imports
import React from "react";

//chakra ui imports
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

//icons imports
import { GrHomeRounded, GrAppsRounded, GrTag } from "react-icons/gr";
import { BsClock } from "react-icons/bs";
import { BiWalletAlt } from "react-icons/bi";
import { MdLogout } from "react-icons/md";

//global components imports
import NavItem from "../NavItem";

const Sidebar = (props) => {
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("inherit", "gray.700")}
      borderRightWidth="1px"
      w="110px"
      {...props}
    >
      <Box px="4" py="5" align="center" justifyContent={"center"}>
        <Text
          fontSize="50px"
          color={useColorModeValue("brand.500", "white")}
          fontWeight="semibold"
        >
          K
        </Text>
      </Box>
      <Box as="nav" fontSize="sm" color="gray.600" aria-label="Main Navigation">
        <NavItem icon={GrHomeRounded} isActive={false}>
          Home
        </NavItem>
        <NavItem icon={GrAppsRounded}>Menu</NavItem>
        <NavItem icon={BsClock}>History</NavItem>
        <NavItem icon={BiWalletAlt}>Wallets</NavItem>
        <NavItem icon={GrTag}>Promos</NavItem>
        <NavItem icon={MdLogout}>Logout</NavItem>
      </Box>
    </Box>
  );
};

export default Sidebar;
