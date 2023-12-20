import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#BBD0FF", // your primary color
      // main: "#8A9EFF", // your primary color
    },
    secondary: {
      main: "#896BBC", // your secondary color
    },
  },
});

theme.typography.h2 = {
  fontSize: "2.4rem",
  lineHeight: 1.2, // Add line-height
  letterSpacing: "-0.00833em", // Add letter-spacing
  marginBottom: "0.35em", // Add margin-bottom
  "@media (min-width:600px)": {
    fontSize: "3.0rem",
    lineHeight: 1.2, // Adjust line-height for sm and above
    marginBottom: "0.4em", // Adjust margin-bottom for sm and above
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.5rem",
    lineHeight: 1.2, // Adjust line-height for md and above
    marginBottom: "0.5em", // Adjust margin-bottom for md and above
  },
};
theme.typography.h6 = {
  fontSize: "1.2rem",
  fontWeight: 400,
  "@media (min-width:600px)": {
    fontSize: "1rem",
    lineHeight: "1.5",
    letterSpacing: "-0.005em",
    marginBottom: "0.25em",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    letterSpacing: "-0.006em",
    marginBottom: "0.3em",
  },
};

export default theme;
