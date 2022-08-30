import { Box, Center, Container, Flex, Heading, Icon } from "@chakra-ui/react";
import { DiCode } from "react-icons/di";

const Footer = () => {
  return (
    <Box mt={10} bg={"primary.default"} color={"accent.default"} py={5}>
      <Container maxW={"7xl"}>
        <Flex flexDir={"column"} alignItems={"center"} gap={5}>
          <Icon as={DiCode} boxSize={20} />
          <Heading
            fontSize={"xl"}
            fontFamily={"title"}
            fontWeight={300}
            letterSpacing={1}
          >
            Learning and exploring every day
          </Heading>
          <Heading
            fontSize={"lg"}
            fontFamily={"title"}
            fontWeight={100}
            letterSpacing={1}
          >
            © Octavianus Bagaswara Adi
          </Heading>
        </Flex>
      </Container>
    </Box>
  );
};
export default Footer;
