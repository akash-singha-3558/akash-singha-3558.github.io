import { Box, Image, Text, Button } from "@chakra-ui/react";
import resume from "../Akash-Singha-Resume.pdf";
import dp from "../dp.png";
import React from "react";
// 
import { AiOutlineDownload } from "react-icons/ai";
import Typical from "react-typical";
import { HomeRightBoxHomeWidth,RightBoxHomeHeight, homeres, ImageBoxHomeHeight, ImageBoxHomeWidth, myNameIsRes } from "./styles";
export const Home = () => {
  return (
    <Box
      h="100vh"
      bg="black"
      w="100%"
      id="home"
      mt="60px"
      
      fontSize="30px"
      display="flex"
      flexDirection={homeres}
      justifyContent="space-between"
      fontFamily="Roboto Mono, monospace"
    >
      <Box
        h={ImageBoxHomeHeight}
        w={ImageBoxHomeWidth}
        m="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
         
       
      >
        <Image src={dp}  width="450px" />
      </Box>

      <Box h={RightBoxHomeHeight} w={HomeRightBoxHomeWidth}   justifyContent={["left","center",]} dispay="flex"  textAlign={myNameIsRes} m="auto"  color="white"  alignItems="stretch" display="flex" flexDirection={"column"} gap="15px" fontSize="25px">
        <Box  ><Text fontSize="35px" left="0" >Hi, My name is</Text></Box>
        <Text fontSize="75px" fontWeight="bold" color="teal">
          Akash Singha
        </Text>
        <Typical
          steps={[
            "I love to build things from scratch",
            1000,
            "I am a full stack developer!",
            500,
          ]}
          loop={Infinity}
          wrapper="p"
        />
        {/* <Box justifyContent={"center"} m="auto"> */}
          
          <a href={resume} download="Akash-Singha-Resume">
            <Button
              bg="white"
              color="black"
              borderRadius="15px"
              _hover={{
                color: "white",
                bg: "black",
                border: "1px solid white",
                borderRadius:"20px"
              }}
            >
              See My Resume😇
              <AiOutlineDownload/>
            </Button>
          </a>
        {/* </Box> */}
        <Box fontSize="20px">
          <p><br/><q>Programming is an art where mind paints <br/> the logic on the Computer.... </q><br/>-Donald Knuth</p>
        </Box>
      </Box>
    </Box>
  );
};
