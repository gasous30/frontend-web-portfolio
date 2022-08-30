import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      default: "#006D77",
    },
    secondary: {
      default: "#83C5BE",
      dark: "#5f8d88",
    },
    accent: {
      default: "#EDF6F9",
    },
    alternative: {
      default: "#FFDDD2",
    },
    gradient: {
      default: "linear-gradient(#006D77 50%, #EDF6F9 50%)",
      variant_1: "linear-gradient(#006D77 60%, #EDF6F9 40%)",
      flip: "linear-gradient(#EDF6F9 80%, #006D77 20%)",
    },
  },
  fonts: {
    heading: "'Taviraj', serif;",
    title: "'Quattrocento Sans', sans-serif;",
    body: "'Mukta', sans-serif;",
  },
  styles: {
    global: {
      body: {
        backgroundColor: "#006D77",
      },
      "&::-webkit-scrollbar": {
        // display: "none",
        width: "0.4em",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "#EDF6F9",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#006D77",
      },
      html: {
        scrollBehavior: "smooth",
        userSelect: "none",
      },
    },
  },
});

export default theme;
