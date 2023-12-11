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

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      {/* Main container */}
      <Box
        sx={{
          // border: "1px solid grey",
          padding: { xs: "10px 0", sm: "50px 0" },
          margin: "0 auto",
        }}
      >
        {/* Hero Section */}
        <Grid
          container
          sx={{
            // border: "1px solid red",
            height: { xs: "85vh", sm: "75vh", md: "75vh" },
          }}
        >
          {/* //section 1 left */}
          <Grid
            item
            xs={12}
            sm={6}
            // sx={{
            //   border: "2px solid pink",
            // }}
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

            <Button
              variant="outlined"
              color="secondary"
              style={{ padding: "10px 20px" }}
            >
              Search Jobs
            </Button>
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
              height: { xs: "45%", sm: "auto" },
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

        {/* Slideshow Section */}

        <Box
          sx={{
            margin: "0 auto",
            width: "100%",
            height: "300px",
            overflowX: "auto",
            minWidth: "240px",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Explore Your Potential: Diverse Job Opportunities Await
          </Typography>
          <Slideshow />
        </Box>
        {/* Section 3 */}
                <Typography variant="p">Step 1</Typography>
                hello its me, I was wondering if after all this year you would like to meet
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={1} style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="p">Step 2</Typography>
                {/* Additional content for Step 2 if needed */}
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={1} style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="p">Step 3</Typography>
                {/* Additional content for Step 3 if needed */}
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={1} style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="p">Step 4</Typography>
                {/* Additional content for Step 4 if needed */}
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
}
