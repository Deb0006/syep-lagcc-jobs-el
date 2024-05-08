import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import Badge from "@mui/material/Badge";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useContext } from "react";
import { DialogContext } from "../pages/_app"; 
import { useState, useEffect } from "react";
import { useRouter } from "next/router"; 


const pages = ['Home', 'Jobs'];
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2'
      },
    },
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: 'none', // Set textTransform to 'none' for lowercase text
            },
          },
        },
      },
  });


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { handleOpen } = useContext(DialogContext); //opens saved jobs
  const [count, setCount] = useState(0);
  const { countSavedJobs } = useContext(DialogContext);
   const router = useRouter(); // Call the useRouter hook here

   const handleOpenSavedJobs = () => {
     if (window.location.pathname !== "/jobs") {
       router.push("/jobs"); // Change location to jobs page if not already there
     }
     handleOpen(); // Then open the dialog
   };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //Badge count
  const updateBadgeCount = () => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setCount(savedJobs.length);
  };

  useEffect(() => {
    updateBadgeCount();
    window.addEventListener("storage", updateBadgeCount);

    return () => {
      window.removeEventListener("storage", updateBadgeCount);
    };
  }, []);

  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            borderBottom: "1px solid lightgrey",
            color: "black",
          }}
        >
          <Container maxWidth="xl" sx={{padding: "2px 6px"}}>
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, width:"48px" }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Link
                        key={page}
                        style={{ textDecoration: "none" }}
                        href={
                          page.toLowerCase() === "home"
                            ? "/"
                            : `/${page.toLowerCase()}`
                        }
                      >
                        <Typography textAlign="center" sx={{ color: "white" }}>
                          {page}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box
                sx={{
                  width: { xs: "45%", md: "18%", lg: "11%" },
                  margin: "0 auto"
                }}
              >
                <img
                  src="LOGO.png"
                  alt="Logo"
                  style={{
                    height: "1.5em", // Adjust the height to match Typography
                    verticalAlign: "middle", // Align the image vertically with text
                  }}
                />
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Link
                    key={page}
                    style={{ textDecoration: "none" }}
                    href={
                      page.toLowerCase() === "home"
                        ? "/"
                        : `/${page.toLowerCase()}`
                    }
                  >
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        "&.underline": {
                          textDecoration: "none", // Remove underline for the Button component
                        },
                      }}
                    >
                      {page}
                    </Button>
                  </Link>
                ))}
              </Box>
              <Box
                sx={{
                  color: "action.active",
                  display: "flex",
                  flexDirection: "column",
                  "& > *": {
                    marginBottom: 0,
                  },
                  "& .MuiBadge-root": {
                    marginRight: 1,
                  },
                }}
              >
                  <Badge color="error" badgeContent={countSavedJobs}>
                    <Button variant="outlined" onClick={handleOpenSavedJobs}>
                      Saved Jobs
                    </Button>
                  </Badge>

              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}
export default ResponsiveAppBar;
