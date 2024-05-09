import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; 
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "@mui/material/Link";
export default function Footer() {
  return (
    <Box bgcolor="#D1D9DC">
      <Container height={100} sx={{ padding: "40px" }}>
        <Grid container spacing={2}>
          {/* Left column: Information about SYEP */}
          <Grid item xs={12} sm={6}>
            {/* Adjust column width for different screen sizes */}
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              About SYEP in NYC
            </Typography>
            <Typography variant="body1">
              The Summer Youth Employment Program (SYEP) is the nations largest
              youth employment program, connecting NYC youth between the ages of
              14 and 24 with career exploration opportunities and paid work
              experience each summer.
            </Typography>
            <Box
              sx={{
                width: { xs: "55%", md: "20%", lg: "15%" },
                paddingTop: "2rem",
              }}
            >
              <img
                src="LOGO.png"
                alt="SYEP, WEC and LaGuardia Logos"
                style={{
                  height: "3em",
                }}
              />
            </Box>
          </Grid>
          {/* Right column: Links */}
          <Grid item xs={12} sm={6}>
            {/* Adjust column width for different screen sizes */}
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              Contact Information
            </Typography>
            <Typography variant="body1">LaGuardia Community College</Typography>
            <Typography variant="body1">
              Summer Youth Employment Program (SYEP)
            </Typography>
            <Typography variant="body1">
              31-10 Thomson Ave, Long Island City, NY 11101
            </Typography>
            <Typography variant="body1">Room C-314</Typography>
            <Typography variant="body1">
              Phone: (718) 482-5340 | (718) 609-2132
            </Typography>
            <Typography variant="body1">Email: syep@lagcc.cuny.edu</Typography>
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "bold", marginTop: "10px" }}
            >
              Follow us
            </Typography>
            <Box marginTop={1} display="flex" flexWrap="wrap" gap={2}>
              <Link
                href="https://www.instagram.com/syep_laguardia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<InstagramIcon />}
                  style={{ marginRight: "8px" }}
                >
                  Instagram
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/company/laguardia-community-college-workforce-educationcenter/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<LinkedInIcon />}
                  style={{ marginRight: "8px" }}
                >
                  LinkedIn
                </Button>
              </Link>
              <Link
                href="https://www.facebook.com/syeplaguardia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<FacebookIcon />}
                  style={{ marginRight: "8px" }}
                >
                  Facebook
                </Button>
              </Link>
              <Link
                href="https://www.nyc.gov/site/dycd/services/jobs-internships/summer-youth-employment-program-syep.page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined" color="primary">
                  SYEP NYC.gov
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}