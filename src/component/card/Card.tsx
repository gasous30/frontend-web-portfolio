import { Box, Center, Image, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionCenter = motion(Center);
const MotionBox = motion(Box);

const Card = ({
  children,
  sizing,
  data,
}: {
  children?: React.ReactNode;
  sizing: String;
  data?: any;
}) => {
  if (sizing === "large") {
    return (
      <MotionCenter
        py={6}
        w={"7xl"}
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
        whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Box w={"full"} bg={"white"} rounded={"lg"} p={6} overflow={"hidden"}>
          {children}
        </Box>
      </MotionCenter>
    );
  } else if (sizing === "mini") {
    return (
      <Center>
        <Box w={"full"} bg={"white"} rounded={"lg"} overflow={"hidden"} h={200}>
          {children}
        </Box>
      </Center>
    );
  } else if (sizing === "largeImage") {
    return (
      <MotionBox
        borderRadius={"2xl"}
        bg={"white"}
        mt={10}
        whileHover={{ y: -10 }}
      >
        <Image
          src={data.img_path}
          h={300}
          w={"full"}
          objectFit={"cover"}
          borderTopRadius={"2xl"}
        />
        <Box p={10}>
          <Heading fontFamily={"title"} fontSize={"xl"} mb={3}>
            {data.title}
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            magni inventore error saepe architecto! Accusamus perspiciatis
            veritatis nam est veniam commodi, natus corrupti sequi magni cumque
            voluptates recusandae? Perferendis aut debitis voluptas, facere
            quidem quaerat distinctio at natus sit dicta ipsa, asperiores
            corrupti nisi? Obcaecati atque voluptate laudantium quos officia
            magnam qui neque. Accusamus, distinctio! Reiciendis qui voluptate
            impedit quasi, nam dolores optio corporis fuga repellat labore
            tenetur, natus sequi maiores atque nostrum explicabo delectus iste
            odit magni eius? Repudiandae, praesentium quod odit soluta quidem a
            enim vel eos, facilis eligendi iure illum quis doloribus ipsum
            numquam, quas est at.
          </Text>
        </Box>
      </MotionBox>
    );
  } else if (sizing === "smallImage") {
    return (
      <MotionBox
        borderRadius={"2xl"}
        bg={"white"}
        mt={10}
        h={"full"}
        whileHover={{ y: -10 }}
      >
        <Image
          src={data.img_path}
          h={200}
          w={"full"}
          objectFit={"cover"}
          borderTopRadius={"2xl"}
        />
        <Box p={10}>
          <Heading fontFamily={"title"} fontSize={"xl"} mb={3}>
            {data.title}
          </Heading>
          <Text>{data.desc}</Text>
        </Box>
      </MotionBox>
    );
  } else {
    return null;
  }
};

export default Card;
