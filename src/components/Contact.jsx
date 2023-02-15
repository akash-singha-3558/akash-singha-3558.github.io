import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub ,AiFillLinkedin,AiOutlineMail,AiOutlinePhone} from "react-icons/ai";

export const Contact = () => {
  return (
    <Box  
    h="auto"
    bg="black"
    w="100%" id="contact"   color="white" fontFamily="Roboto Mono, monospace" p="20px">
    
    <Center> <Text  borderBottom="2px solid teal" p="5px" fontSize="22px" mt="100px">Get In Touch</Text></Center>
    <Box w={{ base:"80%",
    sm:"80%",
    md:"80%",
    lg:"45%",
    xl:"45%",
    "2xl":"45%"}} m="auto"  color="#8993b1" mt="20px">
    <Text textAlign={"center"}>I love to build web applications from scratch.If you want to collaborate or have some work for me, get in touch and share me your thoughts. — I can’t wait to hear all about it! 😇</Text>
    </Box>
    <Box display="flex"    flexWrap={"wrap"}  justifyContent="center"  margin="auto" alignItems={"center"} gap="10px" mt="20px">
    <Box display="flex" justifyContent={"center"}  w="100%" gap="5px" alignItems={"center"}><AiOutlinePhone     fontSize={"40px"} cursor="pointer" onClick={()=>{window.open("tel:123-456-7890","_blank")}}/>  <Text id="contact-phone" color="#8993b1">8918751633</Text></Box>
<Box display="flex" justifyContent={"center"}  w="100%" gap="5px" alignItems={"center"}>< AiFillGithub   fontSize={"40px"} cursor="pointer" onClick={()=>{window.open("https://github.com/akash-singha-3558","_blank")}}/><Text onClick={()=>{window.open("https://github.com/akash-singha-3558","_blank")}} color="#8993b1" id="contact-github"  cursor={"pointer"}>@akash-singha-3558</Text></Box>
<Box display="flex" justifyContent={"center"}  w="100%" gap="5px" alignItems={"center"}><AiFillLinkedin   fontSize={"40px"} cursor="pointer" onClick={()=>{window.open("https://www.linkedin.com/in/akash-singha-b62992213/","_blank")}}/><Text onClick={()=>{window.open("https://www.linkedin.com/in/akash-singha-b62992213/","_blank")}} id="contact-linkedin" color="#8993b1" cursor={"pointer"}>@akash-singha-b62992213</Text></Box>
   
 <Box display="flex" justifyContent={"center"}  w="100%" gap="5px" alignItems={"center"}><AiOutlineMail    fontSize={"40px"} cursor="pointer" onClick={()=>{window.open("mailto:akashsingha3558@gmail.com","_blank")}}/>  <Text onClick={()=>{window.open("mailto:akashsingha3558@gmail.com","_blank")}} color="#8993b1" cursor={"pointer"} id="contact-email">akashsingha3558@gmail.com</Text></Box>

   
    </Box>
<hr  style={{color:"grey",background:"grey",width:"70%",margin:"auto",marginTop:"20px"}}/>
<Text textAlign={"center"} mt="5px" color="#8993b1">Designed and build by Akash Singha, 2023 All rights reserved.</Text>
    </Box>
  )
}
