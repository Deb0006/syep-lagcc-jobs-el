"use client";
import Layout from "../components/Layout";
import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import "../styles/globals.css";
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
          padding: "10px auto",
        }}
      >
        {/* Hero Section */}
        <Grid
          container
          sx={{
            height: { xs: "auto", sm: "75vh", md: "80vh" },
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
                Make money, gain experience, and help your community. Dont
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
      <Box
        sx={{
          margin: "0 auto",
          textAlign: "center",
          padding: "40px 0 20px 0",
          background: "#D5C7E8",
          backgroundColor: "#D5C7E8",
          backgroundImage: "radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)",
          backgroundSize: "20px 20px",
          // background-color: #e5e5f7;
          // opacity: 0.8;
          // background-image: radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
          // background-size: 10px 10px;
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Explore Your Potential: Diverse Job Opportunities Await
        </Typography>
        <FullScreenContent />
      </Box>

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
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Heres what you need to do to start
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
              className="secondary"
              style={{
                minWidth: "250px",
                width: "370px",
                height: "330px",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                color: "white",
                // background: "#0D506C",
                borderRadius: "10px",
                // boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
                // backdropFilter: "blur(1px)",
                // border: "1px solid rgba(209, 239, 255, 0.07)",
                // background: 'radial-gradient(61.98% 61.98% at 100% 0%, rgba(32, 30, 147, 0.65) 0%, rgba(32, 30, 147, 0.2405) 49.77%, rgba(2, 209, 255, 0) 100%), radial-gradient(50% 68.23% at 98.21% 96.61%, rgba(65, 209, 201, 0.73) 0%, rgba(65, 209, 183, 0.3358) 57.82%, rgba(65, 209, 183, 0) 100%), radial-gradient(72.32% 89.58% at 1.34% 3.39%, #F74E76 0%, rgba(242, 87, 87, 0) 100%), linear-gradient(180deg, #58CCDC 0%, rgba(88, 204, 220, 0) 100%), linear-gradient(62.9deg, #8532C7 14.56%, rgba(133, 50, 199, 0) 92.07%, #F2F5FA)',
                // backgroundBlendMode: 'normal,normal,normal,normal,normal,normal',
                // background: 'radial-gradient(110.88% 79.69% at 47.77% 151.82%, #FFEC45 0%, rgba(255, 236, 69, 0.3) 54.92%, rgba(255, 236, 69, 0) 96.11%), radial-gradient(50% 68.23% at 98.21% 96.61%, #41D1B7 0%, rgba(65, 209, 183, 0.35) 49.27%, rgba(65, 209, 183, 0) 100%), radial-gradient(83.71% 75.52% at -10.04% 2.86%, #8263DB 0%, rgba(129, 114, 218, 0.26) 56.87%, rgba(129, 114, 218, 0) 100%), linear-gradient(180deg, #58CCDC 0%, rgba(88, 204, 220, 0) 100%), linear-gradient(81.23deg, #FF557E 21.4%, rgba(255, 85, 85, 0) 84.87%, #F2F5FA)',
                // backgroundBlendMode: 'normal,normal,darken,normal,normal,normal',

                background:
                  "linear-gradient(197.37deg, #7450DB -0.38%, rgba(138, 234, 240, 0) 101.89%), linear-gradient(115.93deg, #3E88F6 4.86%, rgba(62, 180, 246, 0.33) 38.05%, rgba(62, 235, 246, 0) 74.14%), radial-gradient(56.47% 76.87% at 6.92% 7.55%, rgba(62, 136, 246, 0.7) 0%, rgba(62, 158, 246, 0.182) 52.16%, rgba(62, 246, 246, 0) 100%), linear-gradient(306.53deg, #2EE4E3 19.83%, rgba(46, 228, 227, 0) 97.33%)",
                backgroundBlendMode:
                  "normal,normal,normal,normal,normal,normal",
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
                  alt="Law image"
                  width={150}
                  height={200}
                />
                <Typography variant="h4" paddingTop={2}>
                  Step 1
                </Typography>
                <Typography variant="p">
                  Click on the Search Job button and browse the
                  available jobs. Pick 3 that you like and save them
                </Typography>
              </Box>
            </Paper>
            <Paper
              elevation={0}
              className="secondary"
              style={{
                minWidth: "250px",
                width: "370px",
                height: "330px",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                color: "white",
                // background: "#0D506C",
                borderRadius: "10px",
                // boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
                // backdropFilter: "blur(1px)",
                // border: "1px solid rgba(209, 239, 255, 0.07)",

                background:
                  "linear-gradient(197.37deg, #7450DB -0.38%, rgba(138, 234, 240, 0) 101.89%), linear-gradient(115.93deg, #3E88F6 4.86%, rgba(62, 180, 246, 0.33) 38.05%, rgba(62, 235, 246, 0) 74.14%), radial-gradient(56.47% 76.87% at 6.92% 7.55%, rgba(62, 136, 246, 0.7) 0%, rgba(62, 158, 246, 0.182) 52.16%, rgba(62, 246, 246, 0) 100%), linear-gradient(306.53deg, #2EE4E3 19.83%, rgba(46, 228, 227, 0) 97.33%)",
                backgroundBlendMode:
                  "normal,normal,normal,normal,normal,normal",
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
                  alt="Law image"
                  width={150}
                  height={200}
                />
                <Typography variant="h4" paddingTop={2}>
                  Step 2
                </Typography>
                <Typography variant="p">
                  Fill out the form with your information and your top 3 job
                  preferences. Make sure you submit it before the deadline
                </Typography>
              </Box>
            </Paper>
            <Paper
              elevation={0}
              className="secondary"
              style={{
                minWidth: "250px",
                width: "370px",
                height: "330px",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                color: "white",
                // background: "#0D506C",
                borderRadius: "10px",
                // boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
                // backdropFilter: "blur(1px)",
                // border: "1px solid rgba(209, 239, 255, 0.07)",

                background:
                  "linear-gradient(197.37deg, #7450DB -0.38%, rgba(138, 234, 240, 0) 101.89%), linear-gradient(115.93deg, #3E88F6 4.86%, rgba(62, 180, 246, 0.33) 38.05%, rgba(62, 235, 246, 0) 74.14%), radial-gradient(56.47% 76.87% at 6.92% 7.55%, rgba(62, 136, 246, 0.7) 0%, rgba(62, 158, 246, 0.182) 52.16%, rgba(62, 246, 246, 0) 100%), linear-gradient(306.53deg, #2EE4E3 19.83%, rgba(46, 228, 227, 0) 97.33%)",
                backgroundBlendMode:
                  "normal,normal,normal,normal,normal,normal",
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
                  alt="Law image"
                  width={150}
                  height={200}
                />
                <Typography variant="h4" paddingTop={2}>
                  Step 3
                </Typography>
                <Typography variant="p">
                  Wait for a confirmation email from the DYCD and check the
                  participant website regularly to see where you were assaigned
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
