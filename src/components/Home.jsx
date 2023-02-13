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
      mt={{
        base:"60px", 
        sm: '60px',
        md: '60px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px'
      }}
      
      color="#8993b1"
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
        <Image src={dp}  width="70%" />
      </Box>
{/* 35 */}
      <Box h={RightBoxHomeHeight} w={HomeRightBoxHomeWidth}   justifyContent={["left","center",]} dispay="flex"  textAlign={myNameIsRes} m="auto"    alignItems="stretch" display="flex" flexDirection={"column"} gap="15px"     fontSize={{
      base:"16px", 
      sm: '16px',
      md: '25px',
      lg: '25px',
      xl: '25px',
      '2xl': '25px'

  }}  >
        <Box  ><Text fontSize={{
        base:"20px", 
        sm: '20px',
        md: '35px',
        lg: '35px',
        xl: '35px',
        '2xl': '35px'

    }} left="0" >Hi, My name is</Text></Box>
        <Text  id="user-detail-name" fontSize={{
        base:"25px", 
        sm: '25px',
        md: '60px',
        lg: '75px',
        xl: '75px',
        '2xl': '75px'

    }} fontWeight="bold" color="white">
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
              onClick={()=>{
             window.open('https://drive.google.com/file/d/1pRmYvib37ALHPrSjGKt6d6_XgbQEERK3/view?usp=sharing','_blank', 'noreferrer')
              }}
            >
              See My Resume😇
              <AiOutlineDownload/>
            </Button>
          </a>
        {/* </Box> */}
        <Box fontSize={{
        base:"16px", 
        sm: '16px',
        md: '20px',
        lg: '25px',
        xl: '25px',
        '2xl': '25px'

    }}>
          <Text ><br/><q>Programming is an art where mind  <br/>paints the logic on the Computer.... </q></Text>
          <p>-Donald Knuth</p>
        </Box>
      </Box>
    </Box>

  );
};
