import { Box, Image, Text, Button,Center } from "@chakra-ui/react";

import React from "react";


export const Skills = () => {
  return (
    <Box
      h="100vh"
      bg="black"
      w="100%"
      id="Skills"
      mt="20px"
      color="white" fontFamily="Roboto Mono, monospace"
 
    >
       <Center> <Text  borderBottom="2px solid teal" p="5px" fontSize="22px" mt="100px">Skills</Text></Center>
    </Box>
  );
};
