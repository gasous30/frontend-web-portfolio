import { Box, Flex, Heading, Grid, GridItem, Text } from "@chakra-ui/react";
import project from "../../../data/project";
import GridCard from "../../../component/gridCard/GridCard";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

const ProjectHome = () => {
  const titleControl = useAnimation();

  return (
    <Box pt={20} display={"flex"} flexDir={"column"} alignItems={"center"}>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        w={"7xl"}
        textAlign={"center"}
      >
        <MotionHeading
          fontFamily={"title"}
          size={"xl"}
          fontWeight={600}
          onHoverStart={() => titleControl.start({ scaleX: 1, opacity: 1 })}
          onHoverEnd={() => titleControl.start({ scaleX: 0, opacity: 0 })}
        >
          <Link reloadDocument to="/project">
            My Past Projects
          </Link>
          <MotionBox
            h={1}
            w={"full"}
            borderBottomWidth={2}
            borderColor={"black"}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={titleControl}
          />
        </MotionHeading>
        <Text fontSize={"lg"} mt={3}>
          I've done lots of things, such as developing website, designing an
          UAV, creating a machine-learning based program, and many more.
        </Text>
      </Flex>
      <GridCard data={project} />
    </Box>
  );
};

export default ProjectHome;
