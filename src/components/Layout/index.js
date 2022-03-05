//react imports
import React from "react";

//chakra ui imports
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  InputGroup,
  useColorModeValue,
  Heading,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";

//icons imports
import { FiMenu } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";

//global components imports
import Sidebar from "../Sidebar";
import RightSideNav from "../RightSideNav"

const Layout = (props) => {
  const sidebar = useDisclosure();
  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    >
      <Sidebar display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Sidebar w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: "110px" }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg={"transparent"}
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <Box>
            <Heading as={"h1"} fontSize={25}>
              Choose Category
            </Heading>
          </Box>
          <Flex ml={"auto"} mr={"360px"}>
            <InputGroup w="96" display={{ base: "none", md: "flex" }}>
              <InputRightElement color="gray.500" children={<BiSearchAlt />} />
              <Input
                placeholder="Search for articles..."
                bg={"white"}
                border={"transparent"}
              />
            </InputGroup>
          </Flex>
          <Flex m={0}>
            <RightSideNav display={{ base: "none", md: "unset" }} />
          </Flex>
        </Flex>

        <Box as="main" p="4">
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
