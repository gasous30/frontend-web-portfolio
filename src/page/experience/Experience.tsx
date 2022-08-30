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
import experience from "../../data/experience";

const TITLE =
  "Experiences | Octavianus Bagaswara | Frontend and Aeronautics Enthusiast";

const MotionContainer = motion(Container);

const Experience = () => {
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
        My Experiences
      </Heading>
      <Card sizing={"largeImage"} data={experience[0]} />
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {experience.map((val, idx) => {
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

export default Experience;
