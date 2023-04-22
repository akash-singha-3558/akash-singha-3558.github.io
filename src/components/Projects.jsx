import { Box, Center, Text, Flex } from "@chakra-ui/react";
import React from "react";

// import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Direction, projects, ProjectsImageHeight } from "./styles";
const Projects = () => {
  const text = () => ({
    base: "left",
    sm: "left",
    md: "right",
    lg: "right",
    xl: "right",
    "2xl": "right",
  });
  return (
    <Box
      id="projects"
      h="auto"
      bg="black"
      w="100%"
      fontFamily="Roboto Mono, monospace"
      color="white"
      fontSize="22px"
    >
      <Center>
        <Text mt="20" borderBottom="2px solid teal" p="5px">
          {" "}
          Projects
        </Text>
      </Center>
      <Box
        display="grid"
        gridTemplateColumns="repeat(1,1fr)"
        h="100%"
        w="100%"
        m="auto"
        gap="10px"
      >

        <Flex
          boxShadow="rgb(36, 36, 58) 3px 3px 5px"
          className="project-card"
          borderRadius="20px"
          flexDirection={Direction}
          m="auto"
          justifyContent="center"
          w="80%"
          h="auto"
          mt="10px"
          p="20px"
          gap="20px"
        >
          <Box
            w={projects}
            h={ProjectsImageHeight}
            m="auto"
            borderRadius="15px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              style={{
                width: "100%",
                height: "auto",
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
              }}
              src={
                "https://github.com/khanahmad4527/luxefemme/raw/master/client/src/assets/Screenshot%20(120).png?raw=true"
              }
            />
          </Box>
          <Box
            w={projects}
            h={ProjectsImageHeight}
            m="auto"
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            borderRadius="15px"
            p="5px"
            gap="10px"
          >
            <Text
              className="project-title"
              textAlign={text()}
              fontSize="20px"
              borderBottom="2px solid teal"
            >
              Anthropologie.com
            </Text>
            <Text
              textAlign={text()}
              fontSize="16px"
              mt="5px"
              color="#8993b1"
              className="project-description"
            >
              {" "}
              This is our Construct Week Project and the assigned website for us
              was  Anthropologie.com - which allows users to browse and purchase home decor products. It has a wide range of products available in various categories such as Handicrafts, ethnic wear, and home decor. The platform has a user-friendly interface and provides a variety of customization options for products.
            </Text>
            <Text
              fontSize="16px"
              className="project-tech-stack"
              textAlign={text()}
            >
              <span style={{ color: "teal" }}>Tech Stacks Used : </span> React
              JS, Redux, Redux Thunk, Chakra Ui, Node js, Express JS, Mongoose, MongoDB
            </Text>
            <Box
              w="100%"
              display="flex"
              justifyContent={"flex-end"}
              p="10px"
              gap="2px"
            >
              <a
                className="project-github-link"
                href="https://github.com/khanahmad4527/luxefemme"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  style={{ width: "30px", margin: "auto" }}
                />
              </a>
              <a
                href="https://luxefemme.vercel.app/"
                className="project-deployed-link"
              >
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQcDBgECBAj/xABDEAABAwMBBAIMCQ0AAAAAAAABAAIDBAUGEQcSIUExUSIyNjdhcXN1gpGysxUXI0JTobHS4QgTFFJVY3SBkpOUotH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAZEQEBAAMBAAAAAAAAAAAAAAAAAQIRMSH/2gAMAwEAAhEDEQA/ALuREQEREBERAREQEREBERAREQFyoLOu4nIfNdT7pyrHBNk2N5BiVtutc+uFTUxlzxFM1rdd4jgN09SC69Fwqz+I7Evpbn/fb9xSWNbKsdxu9013t0leamn3twSzNLeyaWnUBo5OKonbrmWN2iqkpbleaSnqI9N+J7+yGo1HDxKGqNrOFQkj4XMhH0dLK7X+e7oq2245NZLvXx26gpWT11E4tluDXaBvXENO249OvQejmqrWpjuM3LT6sxPOrPltXU09mFU8UzA+WWSHcYNToBxOup0PLkVs6rzYbZDasKZWSt0nuchqDqOIZ2rB6hvekrDWa0IiKAiIgg867ich811PunKM2Sd7mx+Rd7blJ513E5D5rqfdOUZsk73Nj8i723INvWk7XskmxvD5X0byysrHimheOlmoJc4eENB08JC3ZVF+UZG82SzSjtG1b2nxlnD7CrOpeKdxnH6/JbtDa7VEHSv4uc7g2Ng6XOPID8FZWR7FZKOitfwRVy1U76hkNc5zQAGvcB+caOQbx1HHgdeS3LYjjkdnxGO4yMH6ZdPlnOPSI/mN8WnZekvXkF8udJtRxmz09UWW+sgmfUQ7jTvlrXkcSNR0DoK1cvfEmLc6WnipKWGmp2BkMLGxxtHJoGgCyoiw0IiICIiCDzruJyHzXU+6cozZJ3ubH5F3tuUpnDS7C8ga0EuNsqQABxPyTlWmDbS7dj2J2601lovL56aMte6KlBadXE8NSDzVguZaVthsz7zgNwbC3enpNKqP0O2/0LlF/HJZv2Jfv8Vv3lw7bFZXtLXWO+lpGhBpG8R/UmqjfbJBHS2agp4RpHFTRsaByAaAFoeVd+rDv4Wo9iRY6fa9ZKenigjsl/3I2BjdaVpOgGn6yh4Mlhy3a1jFdQ0Fwp4aaKeOQ1UO7xMbzyJCaqrlREUBERAREQE18KLqQSg7b3hXG+OtYXxvPQV530sxPCYhB794daa+FeSOCRvS8lZ2sI6SgyIgRAREQEXdEHRFirJXQxscwDUysbx6i4A/asbKh7qySEhu60ag6cfm/wDUHpRYTM7emGg7ADT1LmCV0kET3AavYHH1IMqLx3OrkpKeOWNrS50gad4cNOKiKa/1UpG9HANWg8AeZiHX+8P1INjRQYvNQYY37kWrmBx4HmyR3X1sH1qeCDqi7og//9k="
                  style={{ width: "30px", margin: "auto" }}
                />
              </a>
              {/* <a href="https://drive.google.com/file/d/1rpN5YCXBo8jhzWvSTejviytUvIYpScVD/view">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIadaB-dkMxZYRZ-7SmMEisV7pIk0IpNrmyu7GXM&s"
                  style={{ width: "30px", margin: "auto" }}
                />
              </a> */}
            </Box>
          </Box>
        </Flex>










        <Flex
          boxShadow="rgb(36, 36, 58) 3px 3px 5px"
          className="project-card"
          borderRadius="20px"
          flexDirection={Direction}
          m="auto"
          justifyContent="center"
          w="80%"
          h="auto"
          mt="10px"
          p="20px"
          gap="20px"
        >
          <Box
            w={projects}
            h={ProjectsImageHeight}
            m="auto"
            borderRadius="15px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              style={{
                width: "100%",
                height: "auto",
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
              }}
              src={
                "https://user-images.githubusercontent.com/112806398/222690740-be0cb313-e26d-4cb6-a452-df3015124648.png"
              }
            />
          </Box>
          <Box
            w={projects}
            h={ProjectsImageHeight}
            m="auto"
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            borderRadius="15px"
            p="5px"
            gap="10px"
          >
            <Text
              className="project-title"
              textAlign={text()}
              fontSize="20px"
              borderBottom="2px solid teal"
            >
              Apple.com
            </Text>
            <Text
              textAlign={text()}
              fontSize="16px"
              mt="5px"
              color="#8993b1"
              className="project-description"
            >
              {" "}
              This is our Construct Week Project and the assigned website for us
              was Apple.com - an Electronics product shopping website. This
              project uses React JS, Chakra Ui, React Redux,Redux Thunk to
              showcase the functioning of an E-Commerce website. The main
              objective of the project was to make the user have an easier
              experience shopping and maintain the clean design.
            </Text>
            <Text
              fontSize="16px"
              className="project-tech-stack"
              textAlign={text()}
            >
              <span style={{ color: "teal" }}>Tech Stacks Used : </span> React
              JS, Chakra Ui, React Redux,Redux Thunk
            </Text>
            <Box
              w="100%"
              display="flex"
              justifyContent={"flex-end"}
              p="10px"
              gap="2px"
            >
              <a
                className="project-github-link"
                href="https://github.com/Namrata0407/murky-pan-2202"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  style={{ width: "30px", margin: "auto" }}
                />
              </a>
              <a
                href="https://project-khaki-ten.vercel.app/"
                className="project-deployed-link"
              >
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQcDBgECBAj/xABDEAABAwMBBAIMCQ0AAAAAAAABAAIDBAUGEQcSIUExUSIyNjdhcXN1gpGysxUXI0JTobHS4QgTFFJVY3SBkpOUotH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAZEQEBAAMBAAAAAAAAAAAAAAAAAQIRMSH/2gAMAwEAAhEDEQA/ALuREQEREBERAREQEREBERAREQFyoLOu4nIfNdT7pyrHBNk2N5BiVtutc+uFTUxlzxFM1rdd4jgN09SC69Fwqz+I7Evpbn/fb9xSWNbKsdxu9013t0leamn3twSzNLeyaWnUBo5OKonbrmWN2iqkpbleaSnqI9N+J7+yGo1HDxKGqNrOFQkj4XMhH0dLK7X+e7oq2245NZLvXx26gpWT11E4tluDXaBvXENO249OvQejmqrWpjuM3LT6sxPOrPltXU09mFU8UzA+WWSHcYNToBxOup0PLkVs6rzYbZDasKZWSt0nuchqDqOIZ2rB6hvekrDWa0IiKAiIgg867ich811PunKM2Sd7mx+Rd7blJ513E5D5rqfdOUZsk73Nj8i723INvWk7XskmxvD5X0byysrHimheOlmoJc4eENB08JC3ZVF+UZG82SzSjtG1b2nxlnD7CrOpeKdxnH6/JbtDa7VEHSv4uc7g2Ng6XOPID8FZWR7FZKOitfwRVy1U76hkNc5zQAGvcB+caOQbx1HHgdeS3LYjjkdnxGO4yMH6ZdPlnOPSI/mN8WnZekvXkF8udJtRxmz09UWW+sgmfUQ7jTvlrXkcSNR0DoK1cvfEmLc6WnipKWGmp2BkMLGxxtHJoGgCyoiw0IiICIiCDzruJyHzXU+6cozZJ3ubH5F3tuUpnDS7C8ga0EuNsqQABxPyTlWmDbS7dj2J2601lovL56aMte6KlBadXE8NSDzVguZaVthsz7zgNwbC3enpNKqP0O2/0LlF/HJZv2Jfv8Vv3lw7bFZXtLXWO+lpGhBpG8R/UmqjfbJBHS2agp4RpHFTRsaByAaAFoeVd+rDv4Wo9iRY6fa9ZKenigjsl/3I2BjdaVpOgGn6yh4Mlhy3a1jFdQ0Fwp4aaKeOQ1UO7xMbzyJCaqrlREUBERAREQE18KLqQSg7b3hXG+OtYXxvPQV530sxPCYhB794daa+FeSOCRvS8lZ2sI6SgyIgRAREQEXdEHRFirJXQxscwDUysbx6i4A/asbKh7qySEhu60ag6cfm/wDUHpRYTM7emGg7ADT1LmCV0kET3AavYHH1IMqLx3OrkpKeOWNrS50gad4cNOKiKa/1UpG9HANWg8AeZiHX+8P1INjRQYvNQYY37kWrmBx4HmyR3X1sH1qeCDqi7og//9k="
                  style={{ width: "30px", margin: "auto" }}
                />
              </a>
              {/* <a href="https://drive.google.com/file/d/1rpN5YCXBo8jhzWvSTejviytUvIYpScVD/view">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIadaB-dkMxZYRZ-7SmMEisV7pIk0IpNrmyu7GXM&s"
                  style={{ width: "30px", margin: "auto" }}
                />
              </a> */}
            </Box>
          </Box>
        </Flex>

        <Flex
          boxShadow="rgb(36, 36, 58) 3px 3px 5px"
          className="project-card"
          borderRadius="20px"
          flexDirection={Direction}
          m="auto"
          justifyContent="center"
          w="80%"
          h="auto"
          mt="10px"
          p="20px"
          gap="20px"
        >
          <Box
            w={projects}
            h={ProjectsImageHeight}
            m="auto"
            borderRadius="15px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              style={{
                width: "100%",
                height: "auto",
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
              }}
              src={
                "https://user-images.githubusercontent.com/112806398/218826851-cea0a4fa-7c22-4fb9-bbe1-3cfc5cd1cf28.png"
              }
            />
          </Box>
          <Box
            w={projects}
            h={ProjectsImageHeight}
            m="auto"
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            borderRadius="15px"
            p="5px"
            gap="10px"
          >
            <Text
              className="project-title"
              textAlign={text()}
              fontSize="20px"
              borderBottom="2px solid teal"
            >
              Flipkart.com
            </Text>
            <Text
              textAlign={text()}
              fontSize="16px"
              mt="5px"
              color="#8993b1"
              className="project-description"
            >
              {" "}
              This is our Construct Week Project and the assigned website for us
              was Fliplart.com - an E-commerce website. This project uses React
              JS, Chakra Ui, React Redux,Redux Thunk to showcase the functioning
              of an E-Commerce website. The main objective of the project was to
              make the user have an easier experience shopping and maintain the
              clean design.
            </Text>
            <Text
              fontSize="16px"
              className="project-tech-stack"
              textAlign={text()}
            >
              <span style={{ color: "teal" }}>Tech Stacks Used : </span> React
              JS, Chakra Ui, React Redux,Redux Thunk
            </Text>
            <Box
              w="100%"
              display="flex"
              justifyContent={"flex-end"}
              p="10px"
              gap="2px"
            >
              <a
                className="project-github-link"
                href="https://github.com/YashSharma7746/lying-flesh-4692"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  style={{ width: "30px", margin: "auto" }}
                />
              </a>
              <a
                href="https://spiffy-crostata-d83d60.netlify.app/"
                className="project-deployed-link"
              >
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQcDBgECBAj/xABDEAABAwMBBAIMCQ0AAAAAAAABAAIDBAUGEQcSIUExUSIyNjdhcXN1gpGysxUXI0JTobHS4QgTFFJVY3SBkpOUotH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAZEQEBAAMBAAAAAAAAAAAAAAAAAQIRMSH/2gAMAwEAAhEDEQA/ALuREQEREBERAREQEREBERAREQFyoLOu4nIfNdT7pyrHBNk2N5BiVtutc+uFTUxlzxFM1rdd4jgN09SC69Fwqz+I7Evpbn/fb9xSWNbKsdxu9013t0leamn3twSzNLeyaWnUBo5OKonbrmWN2iqkpbleaSnqI9N+J7+yGo1HDxKGqNrOFQkj4XMhH0dLK7X+e7oq2245NZLvXx26gpWT11E4tluDXaBvXENO249OvQejmqrWpjuM3LT6sxPOrPltXU09mFU8UzA+WWSHcYNToBxOup0PLkVs6rzYbZDasKZWSt0nuchqDqOIZ2rB6hvekrDWa0IiKAiIgg867ich811PunKM2Sd7mx+Rd7blJ513E5D5rqfdOUZsk73Nj8i723INvWk7XskmxvD5X0byysrHimheOlmoJc4eENB08JC3ZVF+UZG82SzSjtG1b2nxlnD7CrOpeKdxnH6/JbtDa7VEHSv4uc7g2Ng6XOPID8FZWR7FZKOitfwRVy1U76hkNc5zQAGvcB+caOQbx1HHgdeS3LYjjkdnxGO4yMH6ZdPlnOPSI/mN8WnZekvXkF8udJtRxmz09UWW+sgmfUQ7jTvlrXkcSNR0DoK1cvfEmLc6WnipKWGmp2BkMLGxxtHJoGgCyoiw0IiICIiCDzruJyHzXU+6cozZJ3ubH5F3tuUpnDS7C8ga0EuNsqQABxPyTlWmDbS7dj2J2601lovL56aMte6KlBadXE8NSDzVguZaVthsz7zgNwbC3enpNKqP0O2/0LlF/HJZv2Jfv8Vv3lw7bFZXtLXWO+lpGhBpG8R/UmqjfbJBHS2agp4RpHFTRsaByAaAFoeVd+rDv4Wo9iRY6fa9ZKenigjsl/3I2BjdaVpOgGn6yh4Mlhy3a1jFdQ0Fwp4aaKeOQ1UO7xMbzyJCaqrlREUBERAREQE18KLqQSg7b3hXG+OtYXxvPQV530sxPCYhB794daa+FeSOCRvS8lZ2sI6SgyIgRAREQEXdEHRFirJXQxscwDUysbx6i4A/asbKh7qySEhu60ag6cfm/wDUHpRYTM7emGg7ADT1LmCV0kET3AavYHH1IMqLx3OrkpKeOWNrS50gad4cNOKiKa/1UpG9HANWg8AeZiHX+8P1INjRQYvNQYY37kWrmBx4HmyR3X1sH1qeCDqi7og//9k="
                  style={{ width: "30px", margin: "auto" }}
                />
              </a>
            </Box>
          </Box>
        </Flex>

        <Flex
          boxShadow="rgb(36, 36, 58) 3px 3px 5px"
          className="project-card"
          borderRadius="20px"
          flexDirection={Direction}
          m="auto"
          justifyContent="center"
          w="80%"
          h="auto"
          mt="10px"
          p="20px"
          gap="20px"
        >
          <Box
            w={projects}
            h={ProjectsImageHeight}
            m="auto"
            borderRadius="15px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              style={{
                width: "100%",
                height: "auto",
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
              }}
              src={
                "https://user-images.githubusercontent.com/112806398/218574826-5ff01d90-6eeb-43cd-8829-3b43eaf9dcd7.png"
              }
            />
          </Box>
          <Box
            w={projects}
            h={ProjectsImageHeight}
            m="auto"
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            borderRadius="15px"
            p="5px"
            gap="10px"
          >
            <Text
              className="project-title"
              textAlign={text()}
              fontSize="20px"
              borderBottom="2px solid teal"
            >
              Mytheresa.com
            </Text>
            <Text
              textAlign={text()}
              fontSize="16px"
              mt="5px"
              color="#8993b1"
              className="project-description"
            >
              {" "}
              This is my Construct Week Project and the assigned website for me
              was MYTHERESA - an international clothing brand. This project uses
              React Js, Chakra Ui to shoWcase the functioning of an E-Commerce
              website. The main objective of the project was to make the user
              have an easier experience shopping and maintain the clean design.
            </Text>
            <Text
              fontSize="16px"
              className="project-tech-stack"
              textAlign={text()}
            >
              <span style={{ color: "teal" }}>Tech Stacks Used : </span> React
              Js, Chakra Ui
            </Text>
            <Box
              w="100%"
              display="flex"
              justifyContent={"flex-end"}
              p="10px"
              gap="2px"
            >
              <a
                className="project-github-link"
                href="https://github.com/akash-singha-3558/Mytheresa.com-clone"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  style={{ width: "30px", margin: "auto" }}
                />
              </a>
              <a
                href="https://fashion-bag.netlify.app/"
                className="project-deployed-link"
              >
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQcDBgECBAj/xABDEAABAwMBBAIMCQ0AAAAAAAABAAIDBAUGEQcSIUExUSIyNjdhcXN1gpGysxUXI0JTobHS4QgTFFJVY3SBkpOUotH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAZEQEBAAMBAAAAAAAAAAAAAAAAAQIRMSH/2gAMAwEAAhEDEQA/ALuREQEREBERAREQEREBERAREQFyoLOu4nIfNdT7pyrHBNk2N5BiVtutc+uFTUxlzxFM1rdd4jgN09SC69Fwqz+I7Evpbn/fb9xSWNbKsdxu9013t0leamn3twSzNLeyaWnUBo5OKonbrmWN2iqkpbleaSnqI9N+J7+yGo1HDxKGqNrOFQkj4XMhH0dLK7X+e7oq2245NZLvXx26gpWT11E4tluDXaBvXENO249OvQejmqrWpjuM3LT6sxPOrPltXU09mFU8UzA+WWSHcYNToBxOup0PLkVs6rzYbZDasKZWSt0nuchqDqOIZ2rB6hvekrDWa0IiKAiIgg867ich811PunKM2Sd7mx+Rd7blJ513E5D5rqfdOUZsk73Nj8i723INvWk7XskmxvD5X0byysrHimheOlmoJc4eENB08JC3ZVF+UZG82SzSjtG1b2nxlnD7CrOpeKdxnH6/JbtDa7VEHSv4uc7g2Ng6XOPID8FZWR7FZKOitfwRVy1U76hkNc5zQAGvcB+caOQbx1HHgdeS3LYjjkdnxGO4yMH6ZdPlnOPSI/mN8WnZekvXkF8udJtRxmz09UWW+sgmfUQ7jTvlrXkcSNR0DoK1cvfEmLc6WnipKWGmp2BkMLGxxtHJoGgCyoiw0IiICIiCDzruJyHzXU+6cozZJ3ubH5F3tuUpnDS7C8ga0EuNsqQABxPyTlWmDbS7dj2J2601lovL56aMte6KlBadXE8NSDzVguZaVthsz7zgNwbC3enpNKqP0O2/0LlF/HJZv2Jfv8Vv3lw7bFZXtLXWO+lpGhBpG8R/UmqjfbJBHS2agp4RpHFTRsaByAaAFoeVd+rDv4Wo9iRY6fa9ZKenigjsl/3I2BjdaVpOgGn6yh4Mlhy3a1jFdQ0Fwp4aaKeOQ1UO7xMbzyJCaqrlREUBERAREQE18KLqQSg7b3hXG+OtYXxvPQV530sxPCYhB794daa+FeSOCRvS8lZ2sI6SgyIgRAREQEXdEHRFirJXQxscwDUysbx6i4A/asbKh7qySEhu60ag6cfm/wDUHpRYTM7emGg7ADT1LmCV0kET3AavYHH1IMqLx3OrkpKeOWNrS50gad4cNOKiKa/1UpG9HANWg8AeZiHX+8P1INjRQYvNQYY37kWrmBx4HmyR3X1sH1qeCDqi7og//9k="
                  style={{ width: "30px", margin: "auto" }}
                />
              </a>
              {/* <a href="https://drive.google.com/file/d/1u8Ni68_9D984Qx30H_PF73jpCnbhKlB6/view?usp=sharing"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIadaB-dkMxZYRZ-7SmMEisV7pIk0IpNrmyu7GXM&s" style={{width:"30px",margin:"auto"}} /></a> */}
            </Box>
          </Box>
        </Flex>

        <Flex
          boxShadow="rgb(36, 36, 58) 3px 3px 5px"
          className="project-card"
          borderRadius="20px"
          flexDirection={Direction}
          m="auto"
          justifyContent="center"
          w="80%"
          h="auto"
          mt="10px"
          p="20px"
          gap="20px"
        >
          <Box
            w={projects}
            h={ProjectsImageHeight}
            m="auto"
            borderRadius="15px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              style={{
                width: "100%",
                height: "auto",
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
              }}
              src={
                "https://user-images.githubusercontent.com/112806398/218574989-3d257a6c-7144-424e-a15c-595c4793c564.png"
              }
            />
          </Box>
          <Box
            w={projects}
            h={ProjectsImageHeight}
            m="auto"
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            borderRadius="15px"
            p="5px"
            gap="10px"
          >
            <Text
              className="project-title"
              textAlign={text()}
              fontSize="20px"
              borderBottom="2px solid teal"
            >
              JCREW.com
            </Text>
            <Text
              textAlign={text()}
              fontSize="16px"
              mt="5px"
              color="#8993b1"
              className="project-description"
            >
              {" "}
              This is our Construct Week Project and the assigned website for
              our group was JCREW - an international clothing brand. This
              project uses HTML, CSS, Javascript to showcase the functioning of
              an E-Commerce website. The main objective of the project was to
              make the user have an easier experience shopping and maintain the
              clean design.
            </Text>
            <Text
              fontSize="16px"
              className="project-tech-stack"
              textAlign={text()}
            >
              <span style={{ color: "teal" }}>Tech Stacks Used : </span> HTML,
              CSS , Javascript
            </Text>
            <Box
              w="100%"
              display="flex"
              justifyContent={"flex-end"}
              p="10px"
              gap="2px"
            >
              <a
                className="project-github-link"
                href="https://github.com/Dante2109/enormous-step-3337"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  style={{ width: "30px", margin: "auto" }}
                />
              </a>
              <a
                href="https://acras.netlify.app/"
                className="project-deployed-link"
              >
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQcDBgECBAj/xABDEAABAwMBBAIMCQ0AAAAAAAABAAIDBAUGEQcSIUExUSIyNjdhcXN1gpGysxUXI0JTobHS4QgTFFJVY3SBkpOUotH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAZEQEBAAMBAAAAAAAAAAAAAAAAAQIRMSH/2gAMAwEAAhEDEQA/ALuREQEREBERAREQEREBERAREQFyoLOu4nIfNdT7pyrHBNk2N5BiVtutc+uFTUxlzxFM1rdd4jgN09SC69Fwqz+I7Evpbn/fb9xSWNbKsdxu9013t0leamn3twSzNLeyaWnUBo5OKonbrmWN2iqkpbleaSnqI9N+J7+yGo1HDxKGqNrOFQkj4XMhH0dLK7X+e7oq2245NZLvXx26gpWT11E4tluDXaBvXENO249OvQejmqrWpjuM3LT6sxPOrPltXU09mFU8UzA+WWSHcYNToBxOup0PLkVs6rzYbZDasKZWSt0nuchqDqOIZ2rB6hvekrDWa0IiKAiIgg867ich811PunKM2Sd7mx+Rd7blJ513E5D5rqfdOUZsk73Nj8i723INvWk7XskmxvD5X0byysrHimheOlmoJc4eENB08JC3ZVF+UZG82SzSjtG1b2nxlnD7CrOpeKdxnH6/JbtDa7VEHSv4uc7g2Ng6XOPID8FZWR7FZKOitfwRVy1U76hkNc5zQAGvcB+caOQbx1HHgdeS3LYjjkdnxGO4yMH6ZdPlnOPSI/mN8WnZekvXkF8udJtRxmz09UWW+sgmfUQ7jTvlrXkcSNR0DoK1cvfEmLc6WnipKWGmp2BkMLGxxtHJoGgCyoiw0IiICIiCDzruJyHzXU+6cozZJ3ubH5F3tuUpnDS7C8ga0EuNsqQABxPyTlWmDbS7dj2J2601lovL56aMte6KlBadXE8NSDzVguZaVthsz7zgNwbC3enpNKqP0O2/0LlF/HJZv2Jfv8Vv3lw7bFZXtLXWO+lpGhBpG8R/UmqjfbJBHS2agp4RpHFTRsaByAaAFoeVd+rDv4Wo9iRY6fa9ZKenigjsl/3I2BjdaVpOgGn6yh4Mlhy3a1jFdQ0Fwp4aaKeOQ1UO7xMbzyJCaqrlREUBERAREQE18KLqQSg7b3hXG+OtYXxvPQV530sxPCYhB794daa+FeSOCRvS8lZ2sI6SgyIgRAREQEXdEHRFirJXQxscwDUysbx6i4A/asbKh7qySEhu60ag6cfm/wDUHpRYTM7emGg7ADT1LmCV0kET3AavYHH1IMqLx3OrkpKeOWNrS50gad4cNOKiKa/1UpG9HANWg8AeZiHX+8P1INjRQYvNQYY37kWrmBx4HmyR3X1sH1qeCDqi7og//9k="
                  style={{ width: "30px", margin: "auto" }}
                />
              </a>
              {/* <a href="https://drive.google.com/file/d/1Ef2C4rhvVOn6XRScfSquCwCG29Iu7iUM/view?usp=sharing"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIadaB-dkMxZYRZ-7SmMEisV7pIk0IpNrmyu7GXM&s" style={{width:"30px",margin:"auto"}}/></a> */}
            </Box>
          </Box>
        </Flex>

        <Flex
          boxShadow="rgb(36, 36, 58) 3px 3px 5px"
          className="project-card"
          borderRadius="20px"
          flexDirection={Direction}
          m="auto"
          justifyContent="center"
          w="80%"
          h="auto"
          mt="10px"
          p="20px"
          gap="20px"
        >
          <Box
            w={projects}
            h={ProjectsImageHeight}
            m="auto"
            borderRadius="15px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              style={{
                width: "100%",
                height: "auto",
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
              }}
              src={
                "https://user-images.githubusercontent.com/112806398/218575109-072ebab5-28d2-4baa-beda-41fce5ab9920.png"
              }
            />
          </Box>
          <Box
            w={projects}
            h={ProjectsImageHeight}
            m="auto"
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            borderRadius="15px"
            p="5px"
            gap="10px"
          >
            <Text
              className="project-title"
              textAlign={text()}
              fontSize="20px"
              borderBottom="2px solid teal"
            >
              Hindustan Times
            </Text>
            <Text
              textAlign={text()}
              fontSize="16px"
              mt="5px"
              color="#8993b1"
              className="project-description"
            >
              {" "}
              This is my Construct Week Project and the assigned website for me
              was Hindustantimes -is an Indian English-language daily newspaper
              based in Delhi. This project uses HTML, CSS, Javascript to
              showcase the functioning of an newspaper website. The main
              objective of the project was to make the user have an easier
              experience to read the newpaper and gather information.
            </Text>
            <Text
              fontSize="16px"
              className="project-tech-stack"
              textAlign={text()}
            >
              <span style={{ color: "teal" }}>Tech Stacks Used : </span> HTML,
              CSS , Javascript
            </Text>
            <Box
              w="100%"
              display="flex"
              justifyContent={"flex-end"}
              p="10px"
              gap="2px"
            >
              <a
                className="project-github-link"
                href="https://github.com/akash-singha-3558/proud-wax-6546"
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  style={{ width: "30px", margin: "auto" }}
                />
              </a>
              <a
                href="https://fascinating-mousse-39b1db.netlify.app/"
                className="project-deployed-link"
              >
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQcDBgECBAj/xABDEAABAwMBBAIMCQ0AAAAAAAABAAIDBAUGEQcSIUExUSIyNjdhcXN1gpGysxUXI0JTobHS4QgTFFJVY3SBkpOUotH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAZEQEBAAMBAAAAAAAAAAAAAAAAAQIRMSH/2gAMAwEAAhEDEQA/ALuREQEREBERAREQEREBERAREQFyoLOu4nIfNdT7pyrHBNk2N5BiVtutc+uFTUxlzxFM1rdd4jgN09SC69Fwqz+I7Evpbn/fb9xSWNbKsdxu9013t0leamn3twSzNLeyaWnUBo5OKonbrmWN2iqkpbleaSnqI9N+J7+yGo1HDxKGqNrOFQkj4XMhH0dLK7X+e7oq2245NZLvXx26gpWT11E4tluDXaBvXENO249OvQejmqrWpjuM3LT6sxPOrPltXU09mFU8UzA+WWSHcYNToBxOup0PLkVs6rzYbZDasKZWSt0nuchqDqOIZ2rB6hvekrDWa0IiKAiIgg867ich811PunKM2Sd7mx+Rd7blJ513E5D5rqfdOUZsk73Nj8i723INvWk7XskmxvD5X0byysrHimheOlmoJc4eENB08JC3ZVF+UZG82SzSjtG1b2nxlnD7CrOpeKdxnH6/JbtDa7VEHSv4uc7g2Ng6XOPID8FZWR7FZKOitfwRVy1U76hkNc5zQAGvcB+caOQbx1HHgdeS3LYjjkdnxGO4yMH6ZdPlnOPSI/mN8WnZekvXkF8udJtRxmz09UWW+sgmfUQ7jTvlrXkcSNR0DoK1cvfEmLc6WnipKWGmp2BkMLGxxtHJoGgCyoiw0IiICIiCDzruJyHzXU+6cozZJ3ubH5F3tuUpnDS7C8ga0EuNsqQABxPyTlWmDbS7dj2J2601lovL56aMte6KlBadXE8NSDzVguZaVthsz7zgNwbC3enpNKqP0O2/0LlF/HJZv2Jfv8Vv3lw7bFZXtLXWO+lpGhBpG8R/UmqjfbJBHS2agp4RpHFTRsaByAaAFoeVd+rDv4Wo9iRY6fa9ZKenigjsl/3I2BjdaVpOgGn6yh4Mlhy3a1jFdQ0Fwp4aaKeOQ1UO7xMbzyJCaqrlREUBERAREQE18KLqQSg7b3hXG+OtYXxvPQV530sxPCYhB794daa+FeSOCRvS8lZ2sI6SgyIgRAREQEXdEHRFirJXQxscwDUysbx6i4A/asbKh7qySEhu60ag6cfm/wDUHpRYTM7emGg7ADT1LmCV0kET3AavYHH1IMqLx3OrkpKeOWNrS50gad4cNOKiKa/1UpG9HANWg8AeZiHX+8P1INjRQYvNQYY37kWrmBx4HmyR3X1sH1qeCDqi7og//9k="
                  style={{ width: "30px", margin: "auto" }}
                />
              </a>
              {/* <a href="https://drive.google.com/file/d/1lxB1L5brVBQS-EpAEkTP_pAZP8BZb9AM/view?usp=sharing"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIadaB-dkMxZYRZ-7SmMEisV7pIk0IpNrmyu7GXM&s" style={{width:"30px",margin:"auto"}}/></a> */}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
export default Projects;
