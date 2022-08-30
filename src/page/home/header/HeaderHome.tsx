import { Image, Box, Icon, Heading, Flex } from "@chakra-ui/react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { IoIosAirplane } from "react-icons/io";
import building1 from "../../../asset/building1.png";
import building2 from "../../../asset/building2.png";
import building3 from "../../../asset/building3.png";
import building4 from "../../../asset/building4.png";
import building5 from "../../../asset/building5.png";
import profile from "../../../asset/profile.jpg";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);

const titleContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const titleItem = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0.25,
    },
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.25,
    },
  },
};

const HeaderHome = () => {
  // const titleControl = useAnimation();

  return (
    <MotionBox
      textAlign={"center"}
      overflow={"hidden"}
      // backgroundImage={buildings}
      pt={150}
      h={"95vh"}
      variants={titleContainer}
      initial="hidden"
      animate="show"
    >
      <MotionBox
        pos={"absolute"}
        initial={{ left: 0, opacity: 0 }}
        animate={{ left: "92vw", opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 1,
          opacity: {
            duration: 0.2,
          },
        }}
      >
        <Icon
          as={IoIosAirplane}
          boxSize={200}
          pos={"absolute"}
          left={-100}
          color={"secondary.default"}
        />
      </MotionBox>

      <Flex flexDir={"column"} w={"full"} alignItems={"center"}>
        <MotionHeading
          variants={titleItem}
          fontFamily={"title"}
          size={"2xl"}
          fontWeight={600}
          zIndex={2}
          w={"max-content"}
          cursor={"default"}
          // onHoverStart={() => titleControl.start({ scaleX: 1, opacity: 1 })}
          // onHoverEnd={() => titleControl.start({ scaleX: 0, opacity: 0 })}
        >
          Frontend Developer & Aeronautics Enthusiast
          <MotionBox
            h={2}
            w={"full"}
            borderBottomWidth={2}
            borderColor={"black"}
            initial={{ scaleX: 0, opacity: 0 }}
            // animate={titleControl}
          />
        </MotionHeading>
      </Flex>

      <MotionHeading
        variants={titleItem}
        fontFamily={"title"}
        size={"xl"}
        mt={10}
        fontWeight={100}
        zIndex={2}
        cursor={"default"}
      >
        I code simply and analyze elegantly
      </MotionHeading>
      <Flex justifyContent={"center"} pos={"relative"} mt={10} zIndex={1}>
        <MotionBox
          borderRadius={"full"}
          bg={"secondary.default"}
          boxSize={300}
          mb={10}
          boxShadow={"xl"}
          variants={titleItem}
        >
          <Image
            src={profile}
            boxSize={300}
            borderRadius={"full"}
            mt={-2}
            ml={-2}
            boxShadow={"xl"}
          />
        </MotionBox>
      </Flex>
      <Flex pos={"relative"} bottom={20} zIndex={0}>
        <MotionImage
          src={building1}
          pos={"relative"}
          boxSize={550}
          // bottom={0}
          left={-50}
          zIndex={0}
          initial={{ bottom: -500 }}
          animate={{ bottom: 0 }}
          transition={{ type: "spring", bounce: 0.25 }}
        />
        <MotionImage
          src={building2}
          pos={"relative"}
          boxSize={750}
          // bottom={200}
          left={-250}
          zIndex={-1}
          initial={{ bottom: -500 }}
          animate={{ bottom: 200 }}
          transition={{ delay: 0.1, type: "spring", bounce: 0.25 }}
        />
        <MotionImage
          src={building3}
          pos={"relative"}
          boxSize={550}
          // bottom={-100}
          left={-550}
          zIndex={0}
          initial={{ bottom: -500 }}
          animate={{ bottom: -100 }}
          transition={{ delay: 0.2, type: "spring", bounce: 0.25 }}
        />
        <MotionImage
          src={building4}
          pos={"relative"}
          boxSize={550}
          // bottom={20}
          left={-700}
          zIndex={-1}
          initial={{ bottom: -500 }}
          animate={{ bottom: 200 }}
          transition={{ delay: 0.3, type: "spring", bounce: 0.25 }}
        />
        <MotionImage
          src={building5}
          pos={"relative"}
          boxSize={850}
          // bottom={500}
          left={-1000}
          zIndex={0}
          initial={{ bottom: -500 }}
          animate={{ bottom: 500 }}
          transition={{ delay: 0.4, type: "spring", bounce: 0.25 }}
        />
      </Flex>
    </MotionBox>
  );
};
export default HeaderHome;
