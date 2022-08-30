import { Flex, Stack, Text, List, ListItem } from "@chakra-ui/react";
import Card from "../../../component/card/Card";
import IconWrap from "../../../component/iconWrap/IconWrap";
import { FiCodesandbox } from "react-icons/fi";
import { SiFloatplane } from "react-icons/si";

const CardChildren = () => {
  return (
    <Stack direction={"row"} p={4} w={"full"} justifyContent={"center"}>
      <Flex
        w={"50%"}
        direction={"column"}
        alignItems={"center"}
        borderRight={"1px solid"}
        borderColor={"primary.default"}
      >
        <IconWrap icon={FiCodesandbox} sizing="large" />
        <Flex direction={"column"} mt={4} alignItems={"center"} gap={4}>
          <Flex direction={"column"} alignItems={"center"}>
            <Text
              fontSize={"3xl"}
              fontFamily={"title"}
              fontWeight={600}
              textAlign={"center"}
            >
              Frontend Developer
            </Text>
            <Text
              fontSize={"lg"}
              textAlign={"center"}
              w={"75%"}
              fontWeight={300}
            >
              I like to develop the interface of website from scratch or using
              framework
            </Text>
          </Flex>
          <Flex direction={"column"} mt={4} alignItems={"center"}>
            <Text
              fontSize={"lg"}
              textAlign={"center"}
              w={"75%"}
              fontWeight={400}
              color={"secondary.default"}
            >
              Languages:
            </Text>
            <Text fontSize={"lg"} textAlign={"center"} fontWeight={300}>
              HTML, CSS, Javascript, Sass
            </Text>
          </Flex>
          <Flex direction={"column"} mt={4} alignItems={"center"}>
            <Text
              fontSize={"lg"}
              textAlign={"center"}
              fontWeight={400}
              color={"secondary.default"}
            >
              Frameworks:
            </Text>
            <List fontSize={"lg"} textAlign={"center"} fontWeight={300}>
              <ListItem>React</ListItem>
              <ListItem>Next</ListItem>
              <ListItem>Vite</ListItem>
            </List>
          </Flex>
          <Flex direction={"column"} mt={4} alignItems={"center"}>
            <Text
              fontSize={"lg"}
              textAlign={"center"}
              fontWeight={400}
              color={"secondary.default"}
            >
              Dev Tools:
            </Text>
            <List fontSize={"lg"} textAlign={"center"} fontWeight={300}>
              <ListItem>Bootstrap</ListItem>
              <ListItem>Chakra</ListItem>
              <ListItem>GitHub</ListItem>
              <ListItem>Visual Studio Code IDE</ListItem>
              <ListItem>React Developer Tools</ListItem>
            </List>
          </Flex>
        </Flex>
      </Flex>
      <Flex w={"50%"} direction={"column"} alignItems={"center"}>
        <IconWrap icon={SiFloatplane} sizing="large" />
        <Flex direction={"column"} mt={4} alignItems={"center"} gap={4}>
          <Flex direction={"column"} alignItems={"center"}>
            <Text
              fontSize={"3xl"}
              fontFamily={"title"}
              fontWeight={600}
              textAlign={"center"}
            >
              Aeronautics Enthusiast
            </Text>
            <Text
              fontSize={"lg"}
              textAlign={"center"}
              w={"75%"}
              fontWeight={300}
            >
              Apart from developing the frontend, I also like to design an UAV
              and analyze UAV performance.
            </Text>
          </Flex>
          <Flex direction={"column"} mt={4} alignItems={"center"}>
            <Text
              fontSize={"lg"}
              textAlign={"center"}
              w={"75%"}
              fontWeight={400}
              color={"secondary.default"}
            >
              Languages:
            </Text>
            <Text fontSize={"lg"} textAlign={"center"} fontWeight={300}>
              Python, MATLAB
            </Text>
          </Flex>
          <Flex direction={"column"} mt={4} alignItems={"center"}>
            <Text
              fontSize={"lg"}
              textAlign={"center"}
              fontWeight={400}
              color={"secondary.default"}
            >
              Design and Analyze Tools:
            </Text>
            <List fontSize={"lg"} textAlign={"center"} fontWeight={300}>
              <ListItem>Ansys Fluent</ListItem>
              <ListItem>XFLR5</ListItem>
              <ListItem>Javafoil</ListItem>
              <ListItem>Solidworks</ListItem>
            </List>
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
};

const SkillHome = () => {
  return (
    <Flex justifyContent={"center"} pt={10} bg={"gradient.variant_1"}>
      <Card sizing={"large"}>
        <CardChildren />
      </Card>
    </Flex>
  );
};

export default SkillHome;
