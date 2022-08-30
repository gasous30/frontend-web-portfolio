import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Card from "../../component/card/Card";
import project from "../../data/project";

const TITLE =
  "Projects | Octavianus Bagaswara | Frontend and Aeronautics Enthusiast";

const MotionContainer = motion(Container);

const Project = () => {
  useEffect(() => {
    document.title = TITLE;
  });
  return (
    <MotionContainer
      maxW={"7xl"}
      py={10}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Heading fontFamily={"title"} textAlign={"center"}>
        My Projects
      </Heading>
      <Card sizing={"largeImage"} data={project[0]} />
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {project.map((val, idx) => {
          if (idx !== 0) {
            return (
              <GridItem h={"full"}>
                <Card sizing={"smallImage"} data={val} />
              </GridItem>
            );
          }
        })}
      </Grid>
    </MotionContainer>
  );
};

export default Project;
