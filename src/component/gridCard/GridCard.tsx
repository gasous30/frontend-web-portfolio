import {
  Flex,
  Heading,
  Grid,
  GridItem,
  Tag,
  Box,
  HStack,
  Text,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Card from "../card/Card";

const MotionGrid = motion(Grid);
const MotionGridItem = motion(GridItem);
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const MiniCardContent = (props: any) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      h={"full"}
      textAlign={"center"}
      color={"white"}
      backgroundImage={props.img_path}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <AnimatePresence>
        {isHover && (
          <MotionBox
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            textAlign={"left"}
            w={"full"}
            h={"full"}
            px={10}
            backdropFilter={"auto"}
            backdropBrightness={0.2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HStack>
              {props.tag.map((val: String) => {
                return (
                  <Tag size={"sm"} variant={"subtle"}>
                    {val}
                  </Tag>
                );
              })}{" "}
            </HStack>
            <Text size={"md"}>{props.desc}</Text>
          </MotionBox>
        )}
        {!isHover && (
          <MotionHeading
            fontFamily={"title"}
            fontWeight={600}
            letterSpacing={1}
            lineHeight={1.5}
            fontSize={"2xl"}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            w={"full"}
            h={"full"}
            px={10}
            backdropFilter={"auto"}
            backdropBrightness={0.5}
          >
            {props.title}
          </MotionHeading>
        )}
      </AnimatePresence>
    </Flex>
  );
};

const GridCard = ({ data }: { data: any[] }) => {
  const wrapperVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    initial: {
      scale: 0.5,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <MotionGrid
      templateColumns="repeat(3, 1fr)"
      gap={6}
      w={"7xl"}
      mt={5}
      variants={wrapperVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {data.map((val) => {
        return (
          <MotionGridItem
            w={"100%"}
            boxShadow={"xl"}
            variants={itemVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card sizing={"mini"}>
              <MiniCardContent
                title={val.title}
                img_path={val.img_path}
                tag={val.tag}
                desc={val.desc}
              />
            </Card>
          </MotionGridItem>
        );
      })}
    </MotionGrid>
  );
};
export default GridCard;
