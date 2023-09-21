import { Box, Center, Text, Image } from '@chakra-ui/react'
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);


  const text = () => ({
    base: "center",
    sm: "center",
    md: "left",
    lg: "left",
    xl: "left",
    "2xl": "left"
  })
  return (



    <Box id="about" w="100%" p="20px" className="about section" h="auto" bg="black" backgroundColor="black" color="#8993b1" fontFamily="Roboto Mono, monospace" >


      <Box data-aos="fade-down"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800" boxShadow="rgb(36, 36, 58) 3px 3px 5px" borderRadius="20px" w="90%" h="100%" display="flex" justifyContent="center" m="auto" alignItems="center" gap="15px" flexDirection={{ base: "column", sm: "column", md: "column", lg: "row", xl: "row", "2xl": "row" }} mt="40px">
        <Box w={{ base: "90%", sm: "90%", md: "90%", lg: "45%", xl: "45%", "2xl": "45%" }} h="50%" p="15px" display="flex" justifyContent="center" alignItems="center" borderRadius="25px" >
          <Image w="100%" h="100%" borderRadius="25px" src="https://private-user-images.githubusercontent.com/112806398/269708304-891a37d1-3d3f-464f-8b7c-d2e6ff555cbd.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTUzMTg1MjksIm5iZiI6MTY5NTMxODIyOSwicGF0aCI6Ii8xMTI4MDYzOTgvMjY5NzA4MzA0LTg5MWEzN2QxLTNkM2YtNDY0Zi04YjdjLWQyZTZmZjU1NWNiZC5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkyMVQxNzQzNDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04MzNlZmU5ZjI4NTE3MjdlMjcwNmE0NjhiZjQwOGM0ZWU3YzFlNTJlM2M2OWUxMjllZWQ1ZGQ3YjEyODIwNjYwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.GqlWC7UxPQhKkBF2EhqT8WKX2XSTstYStC_QR1EIvxg" />
        </Box>
        <Box id="user-detail-intro" w={{ base: "90%", sm: "90%", md: "90%", lg: "45%", xl: "45%", "2xl": "45%" }} h="50%" display="flex" justifyContent="center" alignItems="center" flexWrap={"wrap"} flexDirection="column" gap="35px" p="25px" borderRadius="25px" >
          <Text borderBottom="1px solid teal" fontSize="25px" color="white" >About Me</Text>
          <Text textAlign="left" fontSize="18px">A tech-enthusiast MERN developer, with 1000+ hours
            of hands-on coding & DSA project experience in

            developing websites and has a robust problem-
            solving mindset which enables him to improve the
            performance, scalability, and reliability of any project
            assigned him.</Text>
          <Text textAlign="left" fontSize="18px">Looking forward to start his carrier in a
            software based company to apply and learn new
            skills.</Text>
          <Box w="100%" display="flex" flexWrap={"wrap"} gap="10px"><Text>#HTML</Text> <Text>#CSS</Text> <Text>#JavaScript</Text> <Text>#React</Text>
            <Text>#TypeScript</Text> <Text>#Next js</Text> <Text>#ExpressJs</Text> <Text>#MongoDB</Text></Box>
        </Box>
      </Box>
    </Box>
  )
}
