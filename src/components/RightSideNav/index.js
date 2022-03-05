//react imports
import React from "react";

//chakra ui imports
import {
  Box,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  Heading,
  Flex,
} from "@chakra-ui/react";

//icons imports
import { GrHomeRounded, GrAppsRounded, GrTag } from "react-icons/gr";
import { BsClock } from "react-icons/bs";
import { BiWalletAlt } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { VscBellDot } from "react-icons/vsc";

//global components imports
import NavItem from "../NavItem";
import Card from "../Card";

//assets imports
import DisplayPicture from "../../assets/images/shehzad.png";

const RightSideNav = (props) => {
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      right="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("inherit", "gray.700")}
      borderRightWidth="1px"
      w={"350px"}
      {...props}
    >
      <Box px="4" py="5" align="center" justifyContent={"center"}>
        <Flex p={4}>
          <Box w={"20%"}>
            <Image borderRadius={"10px"} src={DisplayPicture} />
          </Box>
          <Box textAlign={"left"} ml={2}>
            <Text color={"gray.300"}>I'm a cashier</Text>
            <Heading as={"h3"} size={"sm"} color={"gray.600"}>
              Shehzad Ahmed
            </Heading>
          </Box>
          <Box ml={"auto"} alignSelf={"center"}>
            <VscBellDot size={30} />
          </Box>
        </Flex>
        <Box mt={5}>
            <Heading as={"h3"} size={"md"} float={"left"}>Bills</Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default RightSideNav;
