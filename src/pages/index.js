"use client";
import "../styles/globals.css";
import Link from "next/link";
import { Container } from "@mui/material";
import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import styles from "../styles/index.module.css";
import FullScreenContent from "../components/FullScreenContent";
import Layout from "../components/Layout";
import StepSection from "../components/StepSection";
import { useTheme, useMediaQuery} from "@mui/material";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

export default function Home() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Layout>
      <Head>
        <title>SYEP Home Page</title>
      </Head>
      {/* Main container 1 */}
      <Container
        sx={{
          maxWidth: "xl",
          height: "auto",
          margin: "0 auto",
          padding: "10px auto",
        }}
      >
        {/* Hero Section */}
        <Grid
          container
          sx={{
            height: { xs: "auto", sm: "75vh", md: "80vh", lg: "85vh" },
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
              {isLargeScreen
                ? "Summer Youth Employment Program - LaGuardia Community College"
                : "Summer Youth Employment Program - LaGCC"}
            </Typography>
            <Box>
              <Typography variant="h1" gutterBottom>
                Find jobs in different fields and industries that match your
                interests and skills.
              </Typography>
              <Typography variant="h1" gutterBottom>
                Make money, gain experience, and help your community. Don&apos;t
                wait, start your job search now!
              </Typography>
            </Box>
            <Box paddingTop={2}>
              <Link href="#instructions">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontSize: "1rem",
                    padding: "10px 30px",
                    width: "50%",
                    borderWidth: "2px",
                    borderRadius: "20px",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#386383",
                      boxShadow: "none",
                    },
                  }}
                >
                  Instructions
                </Button>
              </Link>
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
              padding: "20px 0",
              display: { xs: "grid", sm: "flex" },
              flexWrap: "wrap",
              gridTemplateColumns: { xs: "repeat(3, 1fr)", sm: "auto" },
              gridTemplateRows: { xs: "auto", sm: "auto" },
              gridRowGap: 0,
              height: { xs: "45%", sm: "45%" },
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
              src="/Globe.png"
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
              src="/Education-blocks.png"
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
      <Box
        sx={{
          margin: "0 auto",
          textAlign: "center",
          padding: "40px 0 20px 0",
          background: "#D5C7E8",
          backgroundColor: "#D5C7E8",
          backgroundImage: "radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)",
          backgroundSize: "20px 20px",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Explore Your Potential: Diverse Job Opportunities Await
        </Typography>
        <FullScreenContent />
        <Container sx={{ padding: "40px 20px 20px 20px" }}>
          <Typography variant="p">
            Recognizing the diverse interests of the young people, SYEP offers
            an extensive range of jobs across various industries. From the
            medical, media, tech sectors to public service, arts and fashion,
            and so much more - there is certainly something for everyone. This
            wide-ranging selection ensures that young individuals find work that
            matches their passion and interests, thereby expanding their skills
            and preparing them for their future careers
          </Typography>
        </Container>
      </Box>

      {/* Main container 2 */}
      <Container sx={{ maxWidth: "xl", margin: "0 auto" }}>
        {/* Section 3 */}
        <Box
          sx={{
            padding: "70px 0",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            id="instructions"
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Instructions
          </Typography>
          <Typography variant="h5">
            This is what you need to do to select your summer job:
          </Typography>

          <Box
            sx={{
              padding: "30px 0",
              textAlign: "center",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Box>
          <Grid
            container
            style={{
              marginTop: "10px",
              gap: "80px",
              padding: "40px 0",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StepSection
              step="Step 1"
              imageSrc="/Zoom2.png"
              title="Investigate image"
              description='Click on the "Search Job" button and browse the available jobs based on your preferred category. Pick 2 jobs you like and save them'
            />
            <StepSection
              step="Step 2"
              imageSrc="/Map.png"
              title="Parents image"
              description={
                <ul
                  style={{
                    marginTop: "0",
                    paddingLeft: "18px",
                    width: "320px",
                  }}
                >
                  <li>Read job descriptions and requirements</li>
                  <li>Discuss your 2 job options with your parent/guardian</li>
                  <li>
                    Use Google Maps to ensure commuting does not exceed 45
                    minutes
                  </li>
                  <li>
                    Ensure the work schedule and Cohort matches your
                    availability
                  </li>
                </ul>
              }
            />
            <StepSection
              step="Step 3"
              imageSrc="/List2.png"
              title="Task List image"
              description="Fill out the Placement Form with your information and your top 2 job preferences. Make sure you submit it before the deadline"
            />

            <StepSection
              step="Step 4"
              imageSrc="/Laptop2.png"
              title="Laptop image"
              description="Wait for a confirmation email from the LAGCC's SYEP Team or check the participant site regularly to see where you were assigned"
            />
          </Grid>
          <Box
            sx={{
              width: "100%",
              padding: "40px 0",
              backgroundColor: "#F2F2F2",
            }}
          >
            <InfoRoundedIcon color="error" sx={{ fontSize: "3rem" }} />
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              Important
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ padding: { xs: "0", md: "0 200px" } }}
            >
              Make sure you completed the Virtual Orientation, Sexual Harassment
              Prevention Training, and your 10 tasks on Hats and Ladders
            </Typography>
          </Box>
          <Grid container padding={3} spacing={2}>
            <Grid item xs={12} lg={6}>
              <Link href="/jobs">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontSize: "1rem",
                    padding: "10px 30px",
                    width: "100%",
                    borderWidth: "2px",
                    borderRadius: "20px",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#386383",
                      boxShadow: "none",
                    },
                  }}
                >
                  Search Jobs
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Link
                href="https://form.jotform.com/241586358098167"
                target="_blank"
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{
                    fontSize: "1rem",
                    padding: "10px 30px",
                    width: "100%",
                    borderWidth: "1px",
                    borderRadius: "10px",
                  }}
                >
                  Placement Form
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
