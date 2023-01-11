import { Box, Center,Text,Flex } from '@chakra-ui/react';
import React from 'react';
import Calender from './Calender';
import Stats from './Stats';
// import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from 'react-tooltip'
 const Projects = () => {
  return (
    <Box id="projects"  h="auto" bg="black" w="100%" fontFamily="Roboto Mono, monospace" color="white" fontSize="22px">
      <Center><Text mt="20" borderBottom="2px solid teal" p="5px"> Projects</Text></Center> 
<Flex flexDirection="row" m="auto" justifyContent="center" w="80%" h="400px" mt="10px"  p="20px">
<Box w="45%" h="100%" m="auto" border="1px solid teal" borderRadius="15px" display="flex" justifyContent="center" alignItems="center">
<img w="100%" h="100%" src="https://user-images.githubusercontent.com/112806398/211392919-7943dfe1-ffc0-4bb7-aa6f-15e5a04835f9.png"/>
</Box>
<Box w="50%" h="100%" m="auto"  border="1px solid teal" borderRadius="15px" p="20px" >
<Text textAlign="left" fontSize="20px" borderBottom="2px solid teal">Hindustan Times</Text>
<Text textAlign="left" fontSize="16px" mt="5px"> This is my Construct Week Project and the assigned website for me was Hindustantimes -is an Indian English-language daily newspaper based in Delhi. This project uses HTML, CSS, Javascript to shocase the functioning of an newspaper website. The maain objective of the project was to make the user have an easier experience to read the newpaper and gather information.</Text>
<Text fontSize="16px" textAlign="left"><span style={{color:"teal"}}>Tech Stacks Used : </span> HTML, CSS , Javascript</Text>
<Box w="20%" display="flex" justifyContent="space-between" >

    <a href="https://github.com/akash-singha-3558/proud-wax-6546"><img  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" style={{width:"30px",margin:"auto"}}/></a>
    <a href="https://fascinating-mousse-39b1db.netlify.app/"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQcDBgECBAj/xABDEAABAwMBBAIMCQ0AAAAAAAABAAIDBAUGEQcSIUExUSIyNjdhcXN1gpGysxUXI0JTobHS4QgTFFJVY3SBkpOUotH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAZEQEBAAMBAAAAAAAAAAAAAAAAAQIRMSH/2gAMAwEAAhEDEQA/ALuREQEREBERAREQEREBERAREQFyoLOu4nIfNdT7pyrHBNk2N5BiVtutc+uFTUxlzxFM1rdd4jgN09SC69Fwqz+I7Evpbn/fb9xSWNbKsdxu9013t0leamn3twSzNLeyaWnUBo5OKonbrmWN2iqkpbleaSnqI9N+J7+yGo1HDxKGqNrOFQkj4XMhH0dLK7X+e7oq2245NZLvXx26gpWT11E4tluDXaBvXENO249OvQejmqrWpjuM3LT6sxPOrPltXU09mFU8UzA+WWSHcYNToBxOup0PLkVs6rzYbZDasKZWSt0nuchqDqOIZ2rB6hvekrDWa0IiKAiIgg867ich811PunKM2Sd7mx+Rd7blJ513E5D5rqfdOUZsk73Nj8i723INvWk7XskmxvD5X0byysrHimheOlmoJc4eENB08JC3ZVF+UZG82SzSjtG1b2nxlnD7CrOpeKdxnH6/JbtDa7VEHSv4uc7g2Ng6XOPID8FZWR7FZKOitfwRVy1U76hkNc5zQAGvcB+caOQbx1HHgdeS3LYjjkdnxGO4yMH6ZdPlnOPSI/mN8WnZekvXkF8udJtRxmz09UWW+sgmfUQ7jTvlrXkcSNR0DoK1cvfEmLc6WnipKWGmp2BkMLGxxtHJoGgCyoiw0IiICIiCDzruJyHzXU+6cozZJ3ubH5F3tuUpnDS7C8ga0EuNsqQABxPyTlWmDbS7dj2J2601lovL56aMte6KlBadXE8NSDzVguZaVthsz7zgNwbC3enpNKqP0O2/0LlF/HJZv2Jfv8Vv3lw7bFZXtLXWO+lpGhBpG8R/UmqjfbJBHS2agp4RpHFTRsaByAaAFoeVd+rDv4Wo9iRY6fa9ZKenigjsl/3I2BjdaVpOgGn6yh4Mlhy3a1jFdQ0Fwp4aaKeOQ1UO7xMbzyJCaqrlREUBERAREQE18KLqQSg7b3hXG+OtYXxvPQV530sxPCYhB794daa+FeSOCRvS8lZ2sI6SgyIgRAREQEXdEHRFirJXQxscwDUysbx6i4A/asbKh7qySEhu60ag6cfm/wDUHpRYTM7emGg7ADT1LmCV0kET3AavYHH1IMqLx3OrkpKeOWNrS50gad4cNOKiKa/1UpG9HANWg8AeZiHX+8P1INjRQYvNQYY37kWrmBx4HmyR3X1sH1qeCDqi7og//9k=" style={{width:"30px",margin:"auto"}}/></a>
    <a href="https://drive.google.com/file/d/1lxB1L5brVBQS-EpAEkTP_pAZP8BZb9AM/view?usp=sharing"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIadaB-dkMxZYRZ-7SmMEisV7pIk0IpNrmyu7GXM&s" style={{width:"30px",margin:"auto"}}/></a>
</Box>
</Box>
</Flex>
<Center><Text mt="20" borderBottom="2px solid teal" p="5px"> Github Stats</Text></Center> 
<div style={{marginTop:"20px"}}>
<Stats />
</div>
</Box>
  )
}
export default Projects;