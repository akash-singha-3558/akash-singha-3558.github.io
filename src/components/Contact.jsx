import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

export const Contact = () => {
  return (
    <Box  
    h="100vh"
    bg="black"
    w="100%" id="contact"   color="white" fontFamily="Roboto Mono, monospace">
    
    <Center> <Text  borderBottom="2px solid teal" p="5px" fontSize="22px" mt="100px">Get In Touch</Text></Center>
    
    </Box>
  )
}
