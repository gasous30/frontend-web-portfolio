import { Text, Flex, Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const ProfileHome = () => {
  return (
    <Box
      bg={"primary.default"}
      color={"accent.default"}
      pt={20}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
    >
      <MotionFlex
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        w={"5xl"}
        textAlign={"center"}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", bounce: 0.25 }}
      >
        <MotionHeading fontFamily={"title"} size={"xl"} fontWeight={600}>
          Hi, I'm Octavianus Bagaswara Adi
        </MotionHeading>
        <MotionText fontSize={"lg"} mt={5}>
          I've been dealing with frontend stuff for about{" "}
          {new Date().getFullYear() - 2020} years. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Explicabo, perspiciatis. Animi maxime
          impedit vero, reprehenderit quaerat, culpa, pariatur dolorum deserunt
          assumenda incidunt dolor repellat doloribus vel facilis reiciendis
          enim iusto aut facere magni itaque? Obcaecati tempora voluptas quae
          velit mollitia quibusdam nisi similique perspiciatis dicta distinctio
          deserunt perferendis ab, neque non! Nobis debitis recusandae
          provident, perspiciatis reiciendis amet ducimus iusto! Aliquam rerum
          similique voluptatum qui quam optio quod! Eum totam recusandae
          molestias ut doloribus earum cumque iure qui minima! Dicta nemo
          maiores ut sit, facere fugit natus rerum amet praesentium ex vel vitae
          repellendus, voluptatibus ducimus saepe error dolor quo?
        </MotionText>
      </MotionFlex>
    </Box>
  );
};
export default ProfileHome;
