"use client";
import Layout from '../components/Layout';
import Slideshow from "../components/Slideshow";
import Head from 'next/head';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Paper from '@mui/material/Paper';


export default function Home() {
    return (
      <Layout>
        <Head>
        <title>Home Page</title>
        </Head>
        <Grid container spacing={2} style={{ padding:'65px 0', margin:'0 auto' }}>
          <Grid container>
            <Grid  item xs={12} sm={6}>
              {/* //section 1 */}
              <Typography variant="h2" style={{ fontWeight: 'bold' }} gutterBottom>
              SYEP Jobs at LaGuardia Community College
              </Typography>
              <Typography variant="h6" gutterBottom>
              By participating in structured project and work-based opportunities, NYC youth are better prepared for careers of the future.
              </Typography>

              <Button variant="outlined" color="secondary" >Search Jobs</Button>
            </Grid>
            <Grid item xs={12} sm={6} container justifyContent="flex-end">
              {/* //section 2 */}
              <Image src="/Color-palette.png" alt="Law image" width={150} height={150} />
              <Image src="/Education-blocks.png" alt="Education image" width={150} height={150} />
              <Image src="/Calender.png" alt="Calender image" width={150} height={150} />
              <Image src="/English-class.png" alt="English-class image" width={150} height={150} />
              <Image src="/Microscope.png" alt="Microscope image" width={150} height={150} />
              <Image src="/Laptop.png" alt="Laptop image" width={150} height={150} />
              <Image src="/Trumpet.png" alt="Apple image" width={150} height={150} />
              <Image src="/Globe.png" alt="Globe image" width={150} height={150} />
              <Image src="/Test-tube.png" alt="Test-tube image" width={150} height={150} />
            </Grid>
          </Grid>
          <Box sx={{margin:'0 auto', width: '100%', bgcolor: 'background.paper', overflowX: 'auto', minWidth: '300px' }}>
            <Slideshow/>
          </Box>

          </Grid>  
                <Typography variant="h4" gutterBottom>
                  How to apply for jobs
                </Typography>    
          <Grid container spacing={2} style={{ marginTop: '10px' }}>     
            <Grid item xs={3}>
              <Paper elevation={1} style={{ padding: '20px', textAlign: 'center' }}>
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
      </Layout>
    )
}