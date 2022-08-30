import { Flex, Box, useToast, Text } from "@chakra-ui/react";
import IconWrap from "../iconWrap/IconWrap";
import { MdKeyboardArrowUp } from "react-icons/md";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const BtnToTop = () => {
  const toast = useToast();
  return (
    <Flex
      pos={"fixed"}
      bottom={4}
      right={4}
      w={"max-content"}
      gap={2}
      flexDir={"column"}
      zIndex={4}
    >
      <MotionBox
        as="button"
        onClick={() => {
          if (window.pageYOffset !== 0) {
            window.scrollTo(0, 0);
          } else {
            toast({
              duration: 2500,
              render: () => (
                <Box bg={"accent.default"} py={5} px={0} borderRadius={"xl"}>
                  <Text
                    fontFamily={"body"}
                    textAlign={"center"}
                    fontWeight={600}
                    p={0}
                    m={0}
                  >
                    You are on the top of the page.
                  </Text>
                </Box>
              ),
            });
          }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
      >
        <IconWrap icon={MdKeyboardArrowUp} sizing="small" />
      </MotionBox>
    </Flex>
  );
};

export default BtnToTop;
