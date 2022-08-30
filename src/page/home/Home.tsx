import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import HeaderHome from "./header/HeaderHome";
import ProfileHome from "./profile/ProfileHome";
import SkillHome from "./skill/SkillHome";
import ProjectHome from "./project/ProjectHome";
import ExperienceHome from "./experience/ExperienceHome";

const TITLE = "Octavianus Bagaswara | Frontend and Aeronautics Enthusiast";

const Home = () => {
  useEffect(() => {
    document.title = TITLE;
  });

  return (
    <Box alignContent={"center"}>
      <HeaderHome />
      <ProfileHome />
      <SkillHome />
      <ProjectHome />
      <ExperienceHome />
    </Box>
  );
};

export default Home;
