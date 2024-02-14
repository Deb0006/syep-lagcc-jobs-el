import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // Import Grid component
import Divider from "@mui/material/Divider";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";
export default function Footer() {
  return (
    <Box bgcolor="#D1D9DC">
      <Divider />
      <Container height={100} sx={{ padding: "20px" }}>
        <Grid container spacing={2}>
          {" "}
          {/* Use Grid container */}
          {/* Left column: Information about SYEP */}
          <Grid item xs={12} sm={6}>
            {" "}
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
          </Grid>
          {/* Right column: Links */}
          <Grid item xs={12} sm={6}>
            {" "}
            {/* Adjust column width for different screen sizes */}
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              Contact Information
            </Typography>
            <Typography variant="body1">
              <ul >
                <li>
                  <PhoneIcon
                    fontSize="small"
                    style={{ verticalAlign: "middle", marginRight: "4px" }}
                  />
                  (718) 482-5340 | (718) 609-2132
                </li>
                <li>
                  <EmailIcon
                    fontSize="small"
                    style={{ verticalAlign: "middle", marginRight: "4px" }}
                  />
                  <a href="mailto:syep@lagcc.cuny.edu">syep@lagcc.cuny.edu</a>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/syep_laguardia/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon
                      fontSize="small"
                      style={{ verticalAlign: "middle", marginRight: "4px" }}
                    />
                    SYEP NYC on Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/laguardia-community-college-workforce-educationcenter/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      fontSize="small"
                      style={{ verticalAlign: "middle", marginRight: "4px" }}
                    />
                    SYEP NYC on LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/syeplaguardia/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon
                      fontSize="small"
                      style={{ verticalAlign: "middle", marginRight: "4px" }}
                    />
                    SYEP NYC on Facebook
                  </Link>
                </li>
                <li>
                  Government Website:{" "}
                  <a href="https://www.nyc.gov/site/dycd/services/jobs-internships/summer-youth-employment-program-syep.page">
                    SYEP - NYC.gov
                  </a>
                </li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}