import {Flex,Text,Box,Image} from "@chakra-ui/react"
import logo from "./logo.png"
const Navbar=()=>{

return(

<Flex fontFamily="Roboto Mono, monospace" bg="black" color="white" flexDirection="row" border="1px solid black" w="100%" h="60px" justifyContent="space-around" alignItems="center">
<Box h="100%">
    <Image src={logo} h="100%"/>
</Box>
<Text _hover={{color:"teal", borderBottomWidth:"2px", borderBottomColor:"teal"}} transition="0.4s">Home</Text>
<Text _hover={{color:"teal", borderBottomWidth:"2px", borderBottomColor:"teal"}} transition="0.4s">About</Text>
<Text _hover={{color:"teal", borderBottomWidth:"2px", borderBottomColor:"teal"}} transition="0.4s">Resume</Text>
<Text _hover={{color:"teal", borderBottomWidth:"2px", borderBottomColor:"teal"}} transition="0.4s">Projects</Text>
<Text _hover={{color:"teal", borderBottomWidth:"2px", borderBottomColor:"teal"}} transition="0.4s">Contact</Text>

</Flex>





)



}

export default Navbar;