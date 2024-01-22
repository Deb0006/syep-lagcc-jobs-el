import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Head from "next/head";
import theme from './theme'
import React, { useState, createContext } from "react";

export const DialogContext = createContext();

  function App({ Component, pageProps }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <DialogContext.Provider value={{ open, handleOpen, handleClose }}>
          <Component {...pageProps} />
        </DialogContext.Provider>
      </ThemeProvider>
    );
  }
  
  export default App;