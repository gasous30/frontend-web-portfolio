import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Experience from "./page/experience/Experience";
import Home from "./page/home/Home";
import Project from "./page/project/Project";

const ScrollToTop = (props: any) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

const AllRoute = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </ScrollToTop>
  );
};
export default AllRoute;
