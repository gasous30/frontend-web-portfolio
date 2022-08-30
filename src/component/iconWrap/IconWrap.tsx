import { Center, Flex, Icon, Box } from "@chakra-ui/react";
import { IconType } from "react-icons";

const IconWrap = ({ icon, sizing }: { icon: IconType; sizing: String }) => {
  if (sizing === "small") {
    return (
      <Box>
        <Flex
          borderRadius={"full"}
          justifyContent={"center"}
          alignItems={"center"}
          bg={"rgba(0,0,0,0.5)"}
          boxSize={55}
        >
          <Icon as={icon} boxSize={35} color={"accent.default"} />
        </Flex>
      </Box>
    );
  } else {
    return (
      <Center>
        <Flex
          borderRadius={"full"}
          bg={"secondary.default"}
          boxSize={75}
          justifyContent={"center"}
          alignItems={"center"}
          boxShadow={"xl"}
        >
          <Icon as={icon} boxSize={50} />
        </Flex>
      </Center>
    );
  }
};

export default IconWrap;
