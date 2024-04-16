import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#38556A", // your primary color
      // main: "#8A9EFF", // your primary color
    },
    secondary: {
      main: "#9182C4", // your secondary color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Set textTransform to 'none' for lowercase text
        },
      },
    },
    defaultProps: {
      variant: "outlined", // Set the default variant to 'outlined'
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
theme.typography.h1 = {
  fontSize: "1.2rem",
  fontWeight: 400,
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
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
theme.typography.body2 = {
  fontSize: "1rem"
}
// theme.typography.h1 = {
//     // Increase h1 size and customize as needed
//     fontSize: '3.2rem', // Increased base size
//     lineHeight: 1.2,
//     marginBottom: '0.4em',
//     letterSpacing: '-0.01em', // Adjusted letter-spacing for more balanced scaling
//     fontWeight: 500, // Added fontWeight for stronger heading presence

//     // Optional media queries for responsive adjustments
//     '@media (min-width: 600px)': {
//       fontSize: '4.0rem',
//       lineHeight: 1.2,
//       marginBottom: '0.5em',
//     },
//     [theme.breakpoints.up('md')]: {
//       fontSize: '4.5rem',
//       lineHeight: 1.2,
//       marginBottom: '0.6em',
//     }
//   };
//   theme.typography.p = {
//     // Increase p size and customize as needed
//     fontSize: '1.0rem', // Increased base size for better readability
//     lineHeight: 1.6, // Adjusted line-height for readability and breathing room
//     marginBottom: '1.0em', // Slightly more spacing between paragraphs

//     // Optional media queries for responsive adjustments
//     '@media (min-width: 600px)': {
//       fontSize: '1.1rem',
//       lineHeight: 1.8,
//       marginBottom: '1.2em',
//     },
//     [theme.breakpoints.up('md')]: {
//       fontSize: '1.2rem',
//       lineHeight: 2.0,
//       marginBottom: '1.4em',
//     },
//   };

export default theme;
