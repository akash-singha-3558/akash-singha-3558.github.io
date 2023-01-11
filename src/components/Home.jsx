import { Box,Image,Text } from '@chakra-ui/react'

import dp from "../dp.png"
import React, { Component } from 'react'
import Typical from 'react-typical'
import { homeres } from './styles'
export const Home = () => {
  return (
   <Box h="100vh" bg="black" w="100%" id="home" mt="10px" fontSize="22px" display="flex" flexDirection={homeres} justifyContent="space-between" fontFamily="Roboto Mono, monospace">
    <Box h="80%" w="50%"  m="auto" display="flex" justifyContent="center" alignItems="center" >
    <Image src={dp} borderRadius="50%" />
    </Box>
    
        <Box h="60%" w="50%" textAlign="left" m="auto" color="white" p="40px">
<Text fontSize="40px">Hi, My name is</Text>
<Text fontSize="80px" fontWeight="bold" color="teal">Akash Singha</Text>
<Typical 
        steps={['I love to build things from scratch', 1000, 'I am a full stack developer!', 500]}
        loop={Infinity}
        wrapper="p"
      />
        </Box>

    </Box>
  
  )
}
