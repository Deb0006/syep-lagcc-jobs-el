import "../styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import theme from "../styles/theme";
import React, { useState, useEffect, createContext } from "react";

export const DialogContext = createContext();

function App({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const [countSavedJobs, setCountSavedJobs] = React.useState(0);
  const updateBadgeCount = () => {
    if (typeof window !== "undefined") {
      let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
      setCountSavedJobs(savedJobs.length);
    }
  };
   useEffect(() => {
     let savedJobs = JSON.parse(window.localStorage.getItem("savedJobs"));

     if (savedJobs) {
       let newSavedJobs = savedJobs.filter(
         (id) => typeof id === "string" && id.startsWith("JOB_")
       );
       window.localStorage.setItem("savedJobs", JSON.stringify(newSavedJobs));
     }
   }, []);

  useEffect(() => {
    updateBadgeCount();
    window.addEventListener("storage", updateBadgeCount);

    return () => {
      window.removeEventListener("storage", updateBadgeCount);
    };
  }, []);

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
        <title>SYEP - LaGuardia Community College</title>
        <meta
          name="description"
          content="Summer Youth Employment Program (SYEP) job listings at LaGuardia Community College for Enrolled Participants."
        />
        <link rel="canonical" href="https://syeplaguardia.vercel.app/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DialogContext.Provider
        value={{
          open,
          handleOpen,
          handleClose,
          countSavedJobs,
          updateBadgeCount,
        }}
      >
        <Component {...pageProps} />
      </DialogContext.Provider>
    </ThemeProvider>
  );
}

export default App;
