import {
  Box,
  Flex,
  Spacer,
  Icon,
  Container,
  HStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { DiCode } from "react-icons/di";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  let location = useLocation();
  return (
    <Box bg={"primary.default"} p={4} pos={"sticky"} top={0} zIndex={4}>
      <Container maxW={"7xl"} color={"accent.default"}>
        <Flex>
          <HStack spacing={1} cursor={"pointer"} onClick={() => navigate("/")}>
            <Icon as={DiCode} h={12} w={12} />
            <Heading size={"md"} letterSpacing={5} fontFamily={"body"}>
              BAGAS
            </Heading>
          </HStack>

          <Spacer />

          <HStack spacing={5}>
            <Box>
              <Button
                variant={"ghost"}
                _active={{
                  bg: "accent.default",
                  color: "primary.default",
                  cursor: "default",
                }}
                _hover={{ bg: "accent.default", color: "primary.default" }}
                letterSpacing={1.5}
                onClick={() => navigate("/project", { replace: true })}
                isActive={location.pathname === "/project" ? true : false}
              >
                PROJECT
              </Button>
            </Box>

            <Box>
              <Button
                variant={"ghost"}
                _active={{
                  bg: "accent.default",
                  color: "primary.default",
                  cursor: "default",
                }}
                _hover={{ bg: "accent.default", color: "primary.default" }}
                letterSpacing={1.5}
                onClick={() => navigate("/experience", { replace: true })}
                isActive={location.pathname === "/experience" ? true : false}
              >
                EXPERIENCE
              </Button>
            </Box>

            <Box>
              <Button
                variant={"ghost"}
                _active={{
                  bg: "accent.default",
                  color: "primary.default",
                  cursor: "default",
                }}
                _hover={{ bg: "accent.default", color: "primary.default" }}
                letterSpacing={1.5}
                onClick={() => navigate("/", { replace: true })}
                isActive={location.pathname === "/" ? true : false}
              >
                HOME
              </Button>
            </Box>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
