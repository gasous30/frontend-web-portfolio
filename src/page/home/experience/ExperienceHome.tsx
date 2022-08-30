import { Box, Flex, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import GridCard from "../../../component/gridCard/GridCard";
import experience from "../../../data/experience";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

const ExperienceHome = () => {
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
          <Link reloadDocument to="/experience">
            My Experiences
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
          I joined various organizations to improve my skills.
        </Text>
      </Flex>
      <GridCard data={experience} />{" "}
    </Box>
  );
};

export default ExperienceHome;
