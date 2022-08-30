import { Box, ChakraProvider, Container } from "@chakra-ui/react";

import theme from "./theme";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import ContactBtn from "./component/contactBtn/ContactBtn";
import BtnToTop from "./component/btnToTop/BtnToTop";
import AllRoute from "./AllRoute";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ContactBtn />
    <BtnToTop />
    <Box bg={"accent.default"}>
      <Navbar />
      <AllRoute />
      <Footer />
    </Box>
  </ChakraProvider>
);
