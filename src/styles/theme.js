
// import { extendTheme } from '@mui/joy/styles';

import createTheme  from '@mui/material/styles';
// declare module '@mui/joy/styles' {
//   // No custom tokens found, you can skip the theme augmentation.
// }

const theme = createTheme({
    overrides: {
        MuiButton: {
          root: {
            textTransform: 'none !important',
          },
        },
      },
 
  "colorSchemes": {
    "light": {
      "palette": {
        "primary": {
          "50": "#ecfeff",
          "100": "#cffafe",
          "200": "#a5f3fc",
          "300": "#67e8f9",
          "400": "#22d3ee",
          "500": "#06b6d4",
          "600": "#0891b2",
          "700": "#0e7490",
          "800": "#155e75",
          "900": "#164e63"
        },
        "success": {
          "50": "#ecfdf5",
          "100": "#d1fae5",
          "200": "#a7f3d0",
          "300": "#6ee7b7",
          "400": "#34d399",
          "500": "#10b981",
          "600": "#059669",
          "700": "#047857",
          "800": "#065f46",
          "900": "#064e3b"
        },
        "danger": {
          "50": "#fdf2f8",
          "100": "#fce7f3",
          "200": "#fbcfe8",
          "300": "#f9a8d4",
          "400": "#f472b6",
          "500": "#ec4899",
          "600": "#db2777",
          "700": "#be185d",
          "800": "#9d174d",
          "900": "#831843"
        }
      }
    },
    "dark": {
      "palette": {}
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none !important',
      },
    },
  },
})

export default theme;