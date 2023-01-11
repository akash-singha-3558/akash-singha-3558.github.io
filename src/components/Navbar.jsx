import {Flex,Text,Box,Image, Button} from "@chakra-ui/react"
import logo from "./logo.png";
import {HashLink as Link} from "react-router-hash-link";
import {BsList} from "react-icons/bs";
import {  hamberger, responseElements } from "./styles";
import { useState } from "react";

const Navbar=()=>{
const [show,setShow]=useState("none");
return(
<>
<Flex position="fixed" top="0px" fontFamily="Roboto Mono, monospace" bg="black" color="white" flexDirection="row" border="1px solid black" w="100%" h="60px" justifyContent="space-around" alignItems="center" backgroundColor="black" borderBottom="1px solid grey" zIndex="1000">

<Box h="100%">
<Link to="#home">
    <Image src={logo} h="100%"/>
    </Link>
</Box>

<Link to="#home" smooth  >
<Text display={responseElements}  _hover={{color:"teal", borderBottomWidth:"2px", borderBottomColor:"teal"}} transition="0.4s">Home</Text>
</Link>
<Link to="#about" smooth>
<Text   display={responseElements}  _hover={{color:"teal", borderBottomWidth:"2px", borderBottomColor:"teal"}} transition="0.4s">About</Text>
</Link>
<Link to="#Skills" smooth>
<Text  display={responseElements} _hover={{color:"teal", borderBottomWidth:"2px", borderBottomColor:"teal"}} transition="0.4s">Skills</Text>
</Link>
<Link to="#projects" smooth>
<Text  display={responseElements} _hover={{color:"teal", borderBottomWidth:"2px", borderBottomColor:"teal"}} transition="0.4s">Projects</Text>
</Link>
<Link to="#contact" smooth>
<Text display={responseElements} _hover={{color:"teal", borderBottomWidth:"2px", borderBottomColor:"teal"}} transition="0.4s">Contact</Text>
</Link>

<Link to="#resume" smooth>
<Text display={responseElements} _hover={{color:"teal", borderBottomWidth:"2px", borderBottomColor:"teal"}} transition="0.4s">Resume</Text>
</Link>



<Box display={hamberger}>
<BsList fontSize="40px"  onClick={()=>{
setShow(show==="none"?"grid":"none")

}}/>
</Box>

</Flex>

<Box data-aos="fade-up" fontFamily="Roboto Mono, monospace" position="fixed" w="100%" border="1px solid teal"  h="75vh" padding="100px" backgroundColor="black" display={show} gridTemplateColumns="repeat(1,1fr)" textAlign="center" color="white" zIndex="200">
<div style={ {width:"100px",margin:"auto"}}>
<Link to="#home" smooth >
<Button  onClick={()=>{
setShow(show==="none"?"grid":"none")

}}   _hover={{color:"black",bg:"white"}} border="1px solid white"bg="black" w="80px">Home</Button>
</Link>
</div>
<div style={ {width:"100px",margin:"auto"}}>
<Link to="#about" smooth>
<Button  onClick={()=>{
setShow(show==="none"?"grid":"none")

}}   _hover={{color:"black",bg:"white"}} border="1px solid white"bg="black" w="80px">About</Button>
</Link>
</div>
<div style={ {width:"100px",margin:"auto"}}>
<Link to="#Skills" smooth>

<Button  onClick={()=>{
setShow(show==="none"?"grid":"none")

}}   _hover={{color:"black",bg:"white"}} border="1px solid white"bg="black" w="80px">Skills</Button>
</Link>
</div>
<div style={ {width:"100px",margin:"auto"}}>
<Link to="#projects" smooth>
<Button  onClick={()=>{
setShow(show==="none"?"grid":"none")

}}   _hover={{color:"black",bg:"white"}} border="1px solid white"bg="black" w="80px">Projects</Button>
</Link>
</div>
<div style={ {width:"100px",margin:"auto"}}>
<Link to="#contact" smooth>
<Button  onClick={()=>{
setShow(show==="none"?"grid":"none")

}}   _hover={{color:"black",bg:"white"}} border="1px solid white"bg="black" w="80px">Contact</Button>
</Link>
</div>

<div style={ {width:"100px",margin:"auto"}}>
<Link to="#resume" smooth>
<Button  onClick={()=>{
setShow(show==="none"?"grid":"none")

}}   _hover={{color:"black",bg:"white"}} border="1px solid white"bg="black" w="80px">Contact</Button>
</Link>
</div>
</Box>

</>


)



}

export default Navbar;