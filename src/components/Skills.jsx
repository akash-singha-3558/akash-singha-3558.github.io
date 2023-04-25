import { Box, Image, Text, Button, Center, SimpleGrid } from "@chakra-ui/react";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HTML from "../HTML.png";
import CSS from "../css.png";
import JSS from "../js.png";
import Reacts from "../react.png";
import redux from "../redux.png";
import ts from "../typescript.png";
import next from "../nextjs2.png";
import mongo from "../mongo.png";
import chakraui from "../chakraui.png";
import nodes from "../nodejs.png";
import express from "../express.png";
import gitbash from "../gitbash.png";
import GitHub from "../github.png";
export const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      h="auto"
      bg="black"
      w="100%"
      id="skills"
      color="white"
      fontFamily="Roboto Mono, monospace"
    >
      <Center>
        {" "}
        <Text borderBottom="2px solid teal" p="5px" fontSize="22px" mt="100px">
          Skills
        </Text>
      </Center>
      <Box
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
        display="flex"
        w="80%"
        m="auto"
        flexWrap={"wrap"}
        justifyContent="space-evenly"
        mt="20px"
        gap="40px"
      >
        <Box
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="skills-card"
          border="4px solid #8993b1"
          borderRadius="20px"
          p="20px"
          pl="30px"
          pr="30px"
        >
          <Image className="skills-card-img" src={HTML} alt="html" />
          <Text textAlign={"center"} className="skills-card-name">
            HTML
          </Text>
        </Box>
        <Box
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="skills-card"
          border="4px solid #8993b1"
          borderRadius="20px"
          p="20px"
          pl="30px"
          pr="30px"
        >
          <Image className="skills-card-img" src={CSS} alt="css" />
          <Text textAlign={"center"} className="skills-card-name">
            CSS
          </Text>
        </Box>
        <Box
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="skills-card"
          border="4px solid #8993b1"
          borderRadius="20px"
          p="20px"
          pl="30px"
          pr="30px"
        >
          <Image className="skills-card-img" src={JSS} alt="javascript" />
          <Text textAlign={"center"} className="skills-card-name">
            JavaScript
          </Text>
        </Box>
        <Box
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="skills-card"
          border="4px solid #8993b1"
          borderRadius="20px"
          p="20px"
          pl="30px"
          pr="30px"
        >
          <Image className="skills-card-img" src={Reacts} alt="react" />
          <Text textAlign={"center"} className="skills-card-name">
            React
          </Text>
        </Box>

        <Box
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="skills-card"
          border="4px solid #8993b1"
          borderRadius="20px"
          p="20px"
          pl="30px"
          pr="30px"
        >
          <Image className="skills-card-img" src={redux} alt="redux" />
          <Text textAlign={"center"} className="skills-card-name">
            Redux
          </Text>
        </Box>
        <Box
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="skills-card"
          border="4px solid #8993b1"
          borderRadius="20px"
          p="20px"
          pl="30px"
          pr="30px"
        >
          <Image className="skills-card-img" src={ts} alt="typescript" />
          <Text textAlign={"center"} className="skills-card-name">
            TypeScript
          </Text>
        </Box>

        <Box
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="skills-card"
          border="4px solid #8993b1"
          borderRadius="20px"
          p="20px"
          pl="30px"
          pr="30px"
        >
          <Image
            className="skills-card-img"
            h="92px"
            w="92px"
            src={next}
            alt="Next js"
          />
          <Text textAlign={"center"} className="skills-card-name">
            Next js
          </Text>
        </Box>

        <Box
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="skills-card"
          border="4px solid #8993b1"
          borderRadius="20px"
          p="20px"
          pl="30px"
          pr="30px"
        >
          <Image className="skills-card-img" src={chakraui} alt="Chakra Ui" />
          <Text textAlign={"center"} className="skills-card-name">
            Chakra-UI
          </Text>
        </Box>
        <Box
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="skills-card"
          border="4px solid #8993b1"
          borderRadius="20px"
          p="20px"
          pl="30px"
          pr="30px"
        >
          <Image className="skills-card-img" src={nodes} alt="NodeJS" />
          <Text textAlign={"center"} className="skills-card-name">
            NodeJS
          </Text>
        </Box>
        <Box
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="skills-card"
          border="4px solid #8993b1"
          borderRadius="20px"
          p="20px"
          pl="30px"
          pr="30px"
        >
          <Image className="skills-card-img" src={express} alt="ExpressJs" />
          <Text textAlign={"center"} className="skills-card-name">
            ExpressJs
          </Text>
        </Box>
        <Box
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="skills-card"
          border="4px solid #8993b1"
          borderRadius="20px"
          p="20px"
          pl="30px"
          pr="30px"
        >
          <Image className="skills-card-img" src={mongo} alt="MongoDB" />
          <Text textAlign={"center"} className="skills-card-name">
            MongoDB
          </Text>
        </Box>
        <Box
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="skills-card"
          border="4px solid #8993b1"
          borderRadius="20px"
          p="20px"
          pl="30px"
          pr="30px"
        >
          <Image className="skills-card-img" src={gitbash} alt="GitBash" />
          <Text textAlign={"center"} className="skills-card-name">
            GitBash
          </Text>
        </Box>
        <Box
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="skills-card"
          border="4px solid #8993b1"
          borderRadius="20px"
          p="20px"
          pl="30px"
          pr="30px"
        >
          <Image className="skills-card-img" src={GitHub} alt="GitHub" />
          <Text textAlign={"center"} className="skills-card-name">
            GitHub
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
