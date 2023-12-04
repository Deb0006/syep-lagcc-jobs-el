import '../styles/globals.css'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    overrides: {
        MuiButton: {
          root: {
            textTransform: 'none !important',
          },
        },
      },
  });
  
  function App({ Component, pageProps }) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
  
  export default App;