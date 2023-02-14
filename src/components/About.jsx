import { Box, Center, Text,Image } from '@chakra-ui/react'
import React from 'react'

export const About = () => {
  const text=()=>({
    base:"center",
    sm:"center",
    md:"left",
    lg:"left",
    xl:"left",
    "2xl":"left"
  })
  return (
 
    
   
    <Box id="about"  w="100%" p="20px"  className="about section"  h="auto" bg="black" backgroundColor="black" color="#8993b1" fontFamily="Roboto Mono, monospace" >
  

    <Box  boxShadow="rgb(36, 36, 58) 3px 3px 5px" borderRadius="20px" w="90%" h="100%"  display="flex" justifyContent="center" m="auto" alignItems="center" gap="15px" flexDirection={{base:"column",sm:"column",md:"column",lg:"row",xl:"row","2xl":"row"}} mt="40px">
     <Box w={{base:"70%",sm:"70%",md:"70%",lg:"45%",xl:"45%","2xl":"45%"}} h="50%" p="15px" display="flex" justifyContent="center" alignItems="center"   borderRadius="25px" >
      <Image  w="100%" h="100%" borderRadius="25px" src="https://camo.githubusercontent.com/5ddf73ad3a205111cf8c686f687fc216c2946a75005718c8da5b837ad9de78c9/68747470733a2f2f7468756d62732e6766796361742e636f6d2f4576696c4e657874446576696c666973682d736d616c6c2e676966"/>
     </Box>
     <Box w={{base:"70%",sm:"70%",md:"70%",lg:"45%",xl:"45%","2xl":"45%"}} h="50%" display="flex" justifyContent="center" alignItems="center" flexWrap={"wrap"}  flexDirection="column" gap="35px" p="25px" borderRadius="25px" >
    <Text borderBottom="1px solid teal" fontSize="25px" color="white">About Me</Text>
    <Text textAlign="left" fontSize="18px" id="user-detail-intro">A tech-enthusiast MERN developer, with 1000+ hours
of hands-on coding & DSA project experience in

developing websites and has a robust problem-
solving mindset which enables him to improve the
performance, scalability, and reliability of any project
assigned him.</Text>
 <Text textAlign="left"  fontSize="18px" id="user-detail-intro">Looking forward to start his carrier in a
software based company to apply and learn new
skills.</Text>
     </Box>
    </Box>
</Box>
  )
}
