import JobCard from "../components/JobCard";
import FullScreenDialog from "../components/FullScreenDialog";
import Layout from "../components/Layout";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Pagination from "@mui/material/Pagination";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { google } from "googleapis";
import { useState } from "react";

export async function getStaticProps() {
  const credentials = {
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER,
    client_x509_cert_url: process.env.CLIENT_CERT,
    universe_domain: process.env.UNIVERSE_DOMAIN,
  };

  const auth = new google.auth.GoogleAuth({
    credentials: credentials,
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({ version: "v4", auth: client });

  const getRows1 = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId: process.env.SHEET_ID,
    range: "Sheet4",
  });
  const getRows2 = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId: process.env.SHEET_ID,
    range: "Sheet2",
  });
  const data1 = getRows1.data.values;
  const data2 = getRows2.data.values;

  let parsedData = [];

  // Loop through Sheet 4
  for (let i = 1; i < data1.length; i++) {
    let job = {
      jobID: "JOB_"+i,
      JobTitle: data1[i][1],
      Duties: data1[i][2],
      Restrictions: data1[i][3],
      Requirements: data1[i][4],
      ParticipantsRequested: data1[i][5],
    };

    let existingCompanyIndex = parsedData.findIndex(
      (company) => company.WorksiteName === data1[i][0]
    );

    if (existingCompanyIndex !== -1) {
      parsedData[existingCompanyIndex].jobs.push(job);
    } else {
      parsedData.push({ WorksiteName: data1[i][0], jobs: [job] }); //Initialize new company with first job
    }
  }

  // Loop through Sheet 2
  for (let i = 1; i < data2.length; i++) {
    let worksiteData = {
      WorksiteName: data2[i][1],
      WorksiteID: data2[i][0],
      Industry: data2[i][2],
      IndustryOther: data2[i][3],
      Street: data2[i][4],
      Floor: data2[i][5],
      City: data2[i][6],
      State: data2[i][7],
      ZipCode: data2[i][8],
      SiteImplementation: data2[i][23],
      Schedule: [
        {Start: data2[i][9], End: data2[i][10]},  // Sunday
        {Start: data2[i][11], End: data2[i][12]}, // Monday
        {Start: data2[i][13], End: data2[i][14]}, // Tuesday
        {Start: data2[i][15], End: data2[i][16]}, // Wednesday
        {Start: data2[i][17], End: data2[i][18]}, // Thursday
        {Start: data2[i][19], End: data2[i][20]}, // Friday
        {Start: data2[i][21], End: data2[i][22]}, // Saturday
      ], 
      jobs: [], // Add an empty jobs array
    };

    let existingCompanyIndex = parsedData.findIndex(
      (company) => company.WorksiteName === data2[i][1]
    );

    if (existingCompanyIndex !== -1) {
      worksiteData.jobs = parsedData[existingCompanyIndex].jobs; // Bring jobs from existing data
      parsedData[existingCompanyIndex] = worksiteData; // Replace the existing data with new
    } else {
      parsedData.push(worksiteData);
    }
  }
 function replaceUndefinedOrNull(obj) {
   for (let propName in obj) {
     if (obj[propName] === null || obj[propName] === undefined) {
       obj[propName] = null;
     } else if (typeof obj[propName] === "object") {
       replaceUndefinedOrNull(obj[propName]);
     }
   }
 }

  // before returning parsedData
  replaceUndefinedOrNull(parsedData);

  return {
    props: { parsedData }, // parsedData will be directly provided as a prop to your component
    revalidate: 400,
  };
}

const Jobs = ({ parsedData }) => {
  const industries = [
    "Animal Care/Veterinarian Services",
    "Arts and Culture",
    "Business and Finance",
    "Community/Social Services",
    "Day Care",
    "Educational Services",
    "Engineering and Construction",
    "Government Agency",
    "Healthcare/Medical",
    "Hospitality/Tourism",
    "Legal Services",
    "Manufacturing",
    "Marketing/Public Relations",
    "Media/Entertainment",
    "Other",
    "Professional/Technical Development",
    "Real Estate/Property",
    "Retail",
    "Sports and Recreation",
    "Summer Camp",
    "Technology",
    "Transportation",
  ];
  
  const [filters, setFilters] = useState({
    industry: "",
    city: "",
    zipcode: "",
    siteImplementation: "",
  });
  
  const [page, setPage] = useState(1);
  const rowsPerPage = 15; // number of job cards per page
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase()); // Lowercase for case-insensitive comparison
  };

  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };
 const filteredJobs = parsedData
   // Filter worksites
   .filter((company) => {
     const industryMatch =
       !filters.industry || company.Industry === filters.industry;
     const cityMatch = !filters.city || company.City === filters.city;
     const zipcodeMatch =
       !filters.zipcode ||
       (company.ZipCode &&
         company.ZipCode.toString() === filters.zipcode.toString());
     const implementationMatch =
       !filters.siteImplementation ||
       company.SiteImplementation === filters.siteImplementation;
     const companyNameMatch =
       company.WorksiteName.toLowerCase().includes(searchTerm);
     const jobTitleMatch = company.jobs.some((job) => {
       return job.JobTitle
         ? job.JobTitle.toLowerCase().includes(searchTerm)
         : false;
     });

     return (
       industryMatch &&
       cityMatch &&
       zipcodeMatch &&
       implementationMatch &&
       (companyNameMatch || jobTitleMatch)
     );
   })
   // Map over the filtered worksites' jobs
   .map((company) =>
     company.jobs.map((job) => ({
       ...job,
       ...company,
       jobs: undefined, // we don't want company.jobs property to repeat
     }))
   )
   // Flatten the jobs array
   .reduce((acc, jobs) => acc.concat(jobs), []);
    
    
  // console.log(parsedData);
  // console.log(filteredJobs);

  // paginate filtered jobs
  const offset = (page - 1) * rowsPerPage;
  const currentPageData = filteredJobs.slice(offset, offset + rowsPerPage);
  
  // NEW COMPONENT
 const worksiteCardComponent =
   currentPageData.length > 0 ? (
     currentPageData.map((job, jIndex) => (
       <Grid item xs={12} sm={12} md={6} key={jIndex}>
         <JobCard
           key={job.WorksiteID + "*" + jIndex} // Unique key
           id={job.jobID} // Unique job ID
           title={job.JobTitle}
           name={job.WorksiteName}
           address={job.Street}
           city={job.City}
           state={job.State}
           zipcode={job.ZipCode}
           industry={job.Industry}
           duties={job.Duties}
           requirements={job.Requirements}
           siteImplementation={job.SiteImplementation}
           schedule={job.Schedule}
           participantsRequested={job.ParticipantsRequested}
         />
       </Grid>
     ))
   ) : (
     <Grid item xs={12}>
       <Typography
         variant="h6"
         style={{ textAlign: "center", marginTop: "20px" }}
       >
         No jobs found. Try a different search, or click Reset Filters.
       </Typography>
     </Grid>
   );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const popularCompanies = [
    "CVS",
    "MTA", "NYPD",
    "Mamie Fay School",
    "LaGuardia",
    "BMCC",
    "911 Memorial & Museum",
    "Salvation Army",
  ];
  const handleItemClick = (item) => {
    setSearchTerm(item.toLowerCase()); // Convert item to lower case before setting the search term
  };
  const handleClearFilters = () => {
    setFilters({
      industry: "",
      city: "",
      zipcode: "",
      siteImplementation: "",
    });
    setSearchTerm("");
  };

  return (
    <Layout>
      <Head>
        <title>SYEP Jobs Page</title>
      </Head>
      <Box
        sx={{
          backgroundColor: "#f8f8f8",
        }}
      >
        <Container
          sx={{
            maxWidth: "lg",
            margin: "0 auto",
            padding: "2.5rem 1rem",
            display: "flex",
            flexDirection: "column",
            rowGap: "1rem",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Emerging Leaders Jobs and Internships
          </Typography>
          <Typography variant="p" gutterBottom>
            Start by looking for jobs that match your interests and your
            location:
          </Typography>

          <Grid container style={{ gap: "8px" }}>
            <TextField
              label="Worksite Name or Job Title"
              id="Search-field"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{ width: "200px" }}
            />
            <TextField
              label="ZipCode"
              id="ZipCode-field"
              value={filters.zipcode}
              onChange={(e) => handleFilterChange("zipcode", e.target.value)}
              style={{ width: "100px" }}
            />
            <TextField
              id="industry-field"
              select
              label="Industry"
              value={filters.industry}
              onChange={(e) => handleFilterChange("industry", e.target.value)}
              style={{ width: "130px" }}
            >
              <MenuItem value="">All</MenuItem>
              {industries.map((industry) => (
                <MenuItem key={industry} value={industry}>
                  {industry}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="city-field"
              select
              label="City"
              value={filters.city}
              onChange={(e) => handleFilterChange("city", e.target.value)}
              style={{ width: "130px" }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Queens">Queens</MenuItem>
              <MenuItem value="Manhattan">Manhattan</MenuItem>
              <MenuItem value="Brooklyn">Brooklyn</MenuItem>
              <MenuItem value="Bronx">Bronx</MenuItem>
            </TextField>

            <TextField
              id="site-field"
              select
              label="Site Implementation"
              value={filters.siteImplementation}
              onChange={(e) =>
                handleFilterChange("siteImplementation", e.target.value)
              }
              style={{ width: "190px" }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="In-Person">In-Person</MenuItem>
              <MenuItem value="Hybrid">Hybrid</MenuItem>
              <MenuItem value="Virtually">Virtually</MenuItem>
            </TextField>
            <Chip
              label="Reset Filters"
              color="primary"
              variant="outlined"
              icon={<CloseIcon />}
              onClick={handleClearFilters}
              clickable
              style={{ width: "8rem", height: "3.5rem" }}
            />
          </Grid>
          <Button
            href="https://form.jotform.com/241625273909158"
            target="_blank"
            variant="contained"
            color="secondary"
            style={{
              width: "10rem",
              boxShadow: "none",
              borderRadius: "10px", // Make the border radius more round
              marginLeft: { sm: "auto", md: "auto" },
            }}
          >
            Placement Form
          </Button>
          <Box marginBottom={-1}>
            <Typography variant="h6" gutterBottom>
              Popular Companies
            </Typography>
          </Box>
          <Box
            display="flex"
            flexWrap="nowrap" // Disable wrapping to keep everything in one line
            gap={1}
            overflow="auto" // Allows scrolling
            sx={{
              width: "100%", // Ensure the box takes full container width
              "&::-webkit-scrollbar": {
                display: "none", // Optionally hide the scrollbar for cleaner design
              },
            }}
          >
            {popularCompanies.map((company) => (
              <Chip
                key={company}
                label={company}
                onClick={() => setSearchTerm(company.toLowerCase())}
                clickable
              />
            ))}
          </Box>
        </Container>
      </Box>
      <Container sx={{ maxWidth: "lg", margin: "0 auto" }}>
        <Grid
          container
          spacing={{ xs: 0, sm: 0, md: 1 }}
          rowGap={1}
          paddingRight={{ xs: 0, sm: 0, md: 1 }}
          style={{
            margin: "0 auto",
          }}
        >
          {worksiteCardComponent}
        </Grid>
        <Box display="flex" alignItems="center" padding={"1rem 0"} gap={1}>
          <Typography style={{ fontWeight: "bold" }}>Page:{page}</Typography>
          <Pagination
            variant="outlined"
            color="info"
            count={Math.ceil(filteredJobs.length / rowsPerPage)}
            page={page}
            onChange={handlePageChange}
          />
        </Box>
        <FullScreenDialog allJobs={filteredJobs} />
      </Container>
    </Layout>
  );
};

export default Jobs;
