import {
  Flex,
  Box,
  Icon,
  VStack,
  useDisclosure,
  Button,
  Link,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosClose, IoIosContact } from "react-icons/io";
import contact from "../../data/contact";
import IconWrap from "../iconWrap/IconWrap";

const variants = {
  open: {
    opacity: 300,
    transition: {
      duration: 0.2,
    },
  },
  close: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const MotionBox = motion(Box);

const ContactBtn = () => {
  const { getButtonProps, isOpen } = useDisclosure();
  const buttonProps = getButtonProps();
  return (
    <Flex
      pos={"fixed"}
      bottom={4}
      left={4}
      w={"max-content"}
      gap={2}
      flexDir={"column"}
      zIndex={4}
    >
      <VStack>
        {contact.map((val, idx) => {
          return (
            <AnimatePresence>
              {isOpen && (
                <MotionBox
                  as="button"
                  key={idx}
                  layout
                  // initial={{ opacity: 0, duration: 0.2 }}
                  animate={{ height: 65, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 150 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <Link href={val.link} isExternal key={idx}>
                    <IconWrap icon={val.icon} sizing="small" key={idx} />
                  </Link>
                </MotionBox>
              )}
            </AnimatePresence>
          );
        })}
      </VStack>

      <MotionBox
        as="button"
        {...buttonProps}
        animate={{ rotate: !isOpen ? 45 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
      >
        <IconWrap icon={IoIosClose} sizing="small" />
      </MotionBox>
    </Flex>
  );
};

export default ContactBtn;
