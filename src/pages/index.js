"use client";
import Layout from "../components/Layout";
import Slideshow from "../components/Slideshow";
import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import styles from "../styles/index.module.css";
import FullScreenContent from "../components/FullScreenContent";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      {/* Main container 1 */}
      <Container
        sx={{
          maxWidth: "xl",
          height: "auto",
          margin: "0 auto",
          padding: "10px 0",
        }}
      >
        {/* Hero Section */}
        <Grid
          container
          sx={{
            height: { xs: "auto", sm: "75vh", md: "75vh" },
            padding: "30px 0",
          }}
        >
          {/* //section 1 left */}
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              style={{
                fontWeight: "bold",
                fontSize: { xs: "0.5rem", sm: "1.5rem", md: "2.8rem" },
              }}
              gutterBottom
            >
              Summer Youth Employment Program - LaGCC
            </Typography>
            <Box>
              <Typography variant="h6" gutterBottom>
                Find jobs in different fields and industries that match your
                interests and skills.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Make money, gain experience, and help your community. Don't
                wait, start your job search now!
              </Typography>
            </Box>

            <Box sx={{ padding: "20px 0", width: { xs: "100%", sm: "50%" } }}>
              <Button
                variant="outlined"
                color="secondary"
                style={{
                  padding: "10px 30px",
                  width: "100%",
                }}
              >
                Search Jobs
              </Button>
            </Box>
          </Grid>
          {/* //section 2 right*/}
          <Grid
            item
            xs={12}
            sm={6}
            container
            justifyContent={{ xs: "flex-start", sm: "flex-end" }}
            sx={{
              // border: "2px solid blue",
              padding: "20px 0",
              display: { xs: "grid", sm: "flex" },
              flexWrap: "wrap",
              gridTemplateColumns: { xs: "repeat(3, 1fr)", sm: "auto" },
              gridTemplateRows: { xs: "auto", sm: "auto" },
              gridRowGap: 0,
              height: { xs: "45%", sm: "45" },
              width: { xs: "auto", sm: "45%" },
            }}
          >
            <Image
              src="/Color-palette.png"
              className={styles.responsiveImage}
              alt="Law image"
              width={150}
              height={150}
            />
            <Image
              src="/Education-blocks.png"
              className={styles.responsiveImage}
              alt="Education image"
              width={150}
              height={150}
            />
            <Image
              src="/Calender.png"
              className={styles.responsiveImage}
              alt="Calender image"
              width={150}
              height={150}
            />
            <Image
              src="/English-class.png"
              className={styles.responsiveImage}
              alt="English-class image"
              width={150}
              height={150}
            />
            <Image
              src="/Microscope.png"
              className={styles.responsiveImage}
              alt="Microscope image"
              width={150}
              height={150}
            />
            <Image
              src="/Laptop.png"
              className={styles.responsiveImage}
              alt="Laptop image"
              width={150}
              height={150}
            />
            <Image
              src="/Trumpet.png"
              className={styles.responsiveImage}
              alt="Apple image"
              width={150}
              height={150}
            />
            <Image
              src="/Globe.png"
              className={styles.responsiveImage}
              alt="Globe image"
              width={150}
              height={150}
            />
            <Image
              src="/Test-tube.png"
              className={styles.responsiveImage}
              alt="Test-tube image"
              width={150}
              height={150}
            />
          </Grid>
        </Grid>
      </Container>
      {/* Slideshow Section */}
      <Container
        sx={{
          margin: "0 auto",
          textAlign: "center",
          padding: "20px 0 20px 0",
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          Explore Your Potential: Diverse Job Opportunities Await
        </Typography>
      </Container>
      <FullScreenContent />
      {/* Main container 2 */}
      <Container sx={{ maxWidth: "xl", margin: "0 auto" }}>
        {/* Section 3 */}
        <Box
          sx={{
            padding: "30px 0",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Here's what you need to do to start
          </Typography>
          <Box
            sx={{
              padding: "30px 0",
              textAlign: "center",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 2, sm: 4 }, // spacing between items
            }}
          ></Box>
          <Grid
            container
            style={{
              marginTop: "10px",
              gap: "20px",
              padding: "40px 0",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              elevation={0}
              style={{
                minWidth: "300px",
                width: "370px",
                height: "330px",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                background: "#E2FDFF",
                minWidth: "250px",
              }}
            >
              <Box
                width={"80%"}
                marginTop={-12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/Zoom2.png"
                  // className={styles.responsiveImage}
                  alt="Law image"
                  width={150}
                  height={200}
                />
                <Typography variant="h5" paddingTop={2}>
                  Step 1
                </Typography>
                <Typography variant="p">
                  Click on the "Search Job" button and browse the available
                  jobs. Pick 3 that you like and save them
                </Typography>
              </Box>
            </Paper>
            <Box>
              <Paper
                elevation={0}
                style={{
                  minWidth: "300px",
                  width: "370px",
                  height: "330px",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                  background: "#E2FDFF",
                  minWidth: "250px",
                }}
              >
                <Box
                  width={"80%"}
                  marginTop={-12}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/List2.png"
                    // className={styles.responsiveImage}
                    alt="Law image"
                    width={150}
                    height={200}
                  />
                  <Typography variant="h5" paddingTop={2}>
                    Step 2
                  </Typography>
                  <Typography variant="p">
                    Fill out the form with your information and your top 3 job
                    preferences. Make sure you submit it before the deadline
                  </Typography>
                </Box>
              </Paper>
            </Box>
            <Box>
              <Paper
                elevation={0}
                style={{
                  minWidth: "300px",
                  width: "370px",
                  height: "330px",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                  background: "#E2FDFF",
                  minWidth: "250px",
                }}
              >
                <Box
                  width={"80%"}
                  marginTop={-12}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/Laptop2.png"
                    // className={styles.responsiveImage}
                    alt="Law image"
                    width={150}
                    height={200}
                  />
                  <Typography variant="h5" paddingTop={2}>
                    Step 3
                  </Typography>
                  <Typography variant="p">
                    Wait for a confirmation email from the DYCD and check the
                    participant website regularly to see where you were
                    assaigned
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
