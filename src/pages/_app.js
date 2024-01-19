import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Head from "next/head";
import theme from './theme'
  
  function App({ Component, pageProps }) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />  
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
  
  export default App;