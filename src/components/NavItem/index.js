import React from "react";
import { Box, Icon, useColorModeValue } from "@chakra-ui/react";

const NavItem = (props) => {
  const iconColor = useColorModeValue("gray.600", "gray.300");
  const { icon, children, ...rest } = props;
  return (
    <Box
      align="center"
      padding={"15px 0px"}
      margin={"5px 10px"}
      borderRadius={"15px"}
      cursor="pointer"
      color={useColorModeValue("inherit", "gray.400")}
      _hover={{
        bg: useColorModeValue("gray.100", "gray.900"),
        color: useColorModeValue("gray.900", "gray.200"),
      }}
      bg={props.isActive ? "#704232" : "inherit"}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      {...rest}
    >
      {icon && (
        <Icon
          mx="2"
          boxSize="5"
          _groupHover={{
            color: iconColor,
          }}
          as={icon}
        />
      )}
      <Box>{children}</Box>
    </Box>
  );
};

export default NavItem;
