import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

export const About = () => {
  return (
   
    <Box id="about"  h="100vh" bg="black" w="100%" backgroundColor="black" color="white" fontFamily="Roboto Mono, monospace">
    <Center> <Text  borderBottom="2px solid teal" p="5px" fontSize="22px">About</Text></Center>
</Box>
  )
}
