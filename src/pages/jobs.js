import JobCard from "../components/JobCard";
import { useState, useEffect } from "react";
import Layout from '../components/Layout';
import Head from 'next/head';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Container } from "@mui/material";
import { google } from "googleapis";

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
    range: "Sheet1",
  });
  const getRows2 = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId: process.env.SHEET_ID,
    range: "Sheet2",
  });
  const data1 = getRows1.data.values;
  const data2 = getRows2.data.values;

let parsedData = [];

// Loop through Sheet 1
for (let i = 1; i < data1.length; i++) {
  let job = {
    JobTitle: data1[i][1],
    Duties: data1[i][2],
    Restrictions: data1[i][3],
    Requirements: data1[i][4],
    ParticipantsRequested: data1[i][5],
  };

  let existingCompanyIndex = parsedData.findIndex(company => company.WorksiteName === data1[i][0]);
  
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
      }
    }
  }

  // before returning your parsedData
  replaceUndefinedOrNull(parsedData);

  return {
    props: { parsedData }, // parsedData will be directly provided as a prop to your component
    revalidate: 1800,
  };
} 


const Jobs = ({ parsedData }) => {
  // const jobData = [
  //   {
  //     id: 1,
  //     contract: { CB: 0, QB: 0, MB: 0 },
  //     title: "Software Engineer",
  //     company: "Company D",
  //     address: "2581 Atlantic Avenue",
  //     location: "Manhattan",
  //     state: "NY",
  //     zipcode: 10001,
  //     jobCategory: "Technology",
  //     visible: true,
  //     backgroundCheck: false,
  //     iconName: "CodeOutlinedIcon",
  //     description:
  //       "Seeking a talented Software Engineer to join our team in developing cutting-edge software solutions.",
  //   },..]

  //api call
  // const [jobData, setJobData] = useState([]);
  // useEffect(() => {
  //   async function getJobData() {
  //     const response = await fetch("/api/firebase-config");
  //     const data = await response.json();
  //     setJobData(data);
  //   }
  //   getJobData();
  // }, []);

  // fetch from Data from Sheet1 and Sheet2 already parsed (not necessary anymore)
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // async function fetchData() {
  //   const res = await fetch("/api/worksites");
  //   const json = await res.json();

  //   if (res.status !== 200) {
  //     console.error(json);
  //     throw new Error("Failed to fetch API");
  //   }
  //   setData(json);
  // }

  console.log(parsedData);
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

  // const [filters, setFilters] = useState({
  //   jobCategory: '',
  //   location: '',
  //   zipcode: '',
  //   backgroundCheck:null,
  // });

  // const handleFilterChange = (field, value) => {
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     [field]: value,
  //   }));
  // };
  const [filters, setFilters] = useState({
    industry: "",
    city: "",
    zipcode: "",
  });

  const handleFilterChange = (field, value) => {
    console.log(`Field: ${field}, Value: ${value}`); // Check if this logs correctly
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };


  // const filteredJobs = jobData.filter((item) => {
  //   const categoryMatch = !filters.jobCategory || item.jobCategory === filters.jobCategory;
  //   const locationMatch = !filters.location || item.location === filters.location;
  //   const zipcodeMatch = !filters.zipcode || item.zipcode.toString() === filters.zipcode.toString();
  //   const backgroundCheckMatch =
  //     filters.backgroundCheck === null ||
  //     item.backgroundCheck === filters.backgroundCheck;

  //   return categoryMatch && locationMatch && zipcodeMatch && backgroundCheckMatch;
  // });
  const filteredJobs = parsedData
    // Filter worksites
    .filter((company) => {
      const industryMatch =
        !filters.industry || company.Industry === filters.industry;
      const cityMatch = !filters.city || company.City === filters.city;
      const zipcodeMatch =
        !filters.zipcode ||
        company.ZipCode.toString() === filters.zipcode.toString();
      return industryMatch && cityMatch && zipcodeMatch;
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
    console.log(parsedData)
    console.log(filteredJobs)

  const dataForCard = filteredJobs.map((item) => (
    <Grid item xs={12} sm={12} md={6} key={item.id}>
      <JobCard
        key={item.id}
        title={item.title}
        company={item.company}
        address={item.address}
        zipcode={item.zipcode}
        location={item.location}
        jobCategory={item.jobCategory}
        description={item.description}
        iconName={item.iconName}
        backgroundCheck={item.backgroundCheck}
      />
    </Grid>
  ));
  console.log(parsedData);
  console.log(filteredJobs);

  // NEW COMPONENT
  const worksiteCardComponent = filteredJobs.map((job, jIndex) => {
    // For each job, create a JobCard component
    return (
      <Grid item xs={12} sm={12} md={6} key={jIndex}>
        <JobCard
          key={job.WorksiteID + "_" + jIndex} // Unique key
          title={job.JobTitle}
          name={job.WorksiteName}
          address={job.Street}
          city={job.City}
          state={job.State}
          zipcode={job.ZipCode}
          industry={job.Industry}
          duties={job.Duties}
          requirements={job.Requirements}
        />
      </Grid>
    );
  });

  return (
    <Layout>
      <Head>
        <title>Jobs Page</title>
      </Head>
      <Container sx={{ maxWidth: "lg", margin: "0 auto" }}>
        <Box
          display="flex"
          flexDirection="column"
          rowGap={2}
          style={{ margin: "0 auto", padding: "20px 0" }}
        >
          <Typography variant="h4" gutterBottom>
            Jobs and Internships
          </Typography>
          <Typography variant="p" gutterBottom>
            Start by looking for jobs that match your interests or your
            location:
          </Typography>
          <Grid container style={{ columnGap: "16px" }}>
            {/* <TextField
              select
              label="Job Category"
              value={filters.jobCategory}
              onChange={(e) =>
                handleFilterChange("jobCategory", e.target.value)
              }
              style={{ width: "200px" }}
            >
              <MenuItem value="">All</MenuItem>
              {jobData.map((job) => (
                <MenuItem key={job.id} value={job.jobCategory}>
                  {job.jobCategory}
                </MenuItem>
              ))}
            </TextField> */}

            {/* <TextField
              label="Zipcode"
              value={filters.zipcode}
              onChange={(e) => handleFilterChange("zipcode", e.target.value)}
              style={{ width: "100px" }}
            /> */}
            <TextField
              select
              label="Industry"
              value={filters.industry}
              onChange={(e) => handleFilterChange("industry", e.target.value)}
              style={{ width: "200px" }}
            >
              <MenuItem value="">All</MenuItem>
              {industries.map((industry) => (
                <MenuItem key={industry} value={industry}>
                  {industry}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="City"
              value={filters.city}
              onChange={(e) => handleFilterChange("city", e.target.value)}
              style={{ width: "200px" }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Queens">Queens</MenuItem>
              <MenuItem value="Manhattan">Manhattan</MenuItem>
              <MenuItem value="Brooklyn">Brooklyn</MenuItem>
              <MenuItem value="Bronx">Bronx</MenuItem>
            </TextField>
            <TextField
              label="ZipCode"
              value={filters.zipcode}
              onChange={(e) => handleFilterChange("zipcode", e.target.value)}
              style={{ width: "100px" }}
            />

            <FormControlLabel
              control={
                <Switch
                  color="secondary"
                  checked={filters.backgroundCheck === false}
                  onChange={(e) =>
                    handleFilterChange(
                      "backgroundCheck",
                      e.target.checked ? false : null
                    )
                  }
                />
              }
              label="No Background Check Required"
            />
          </Grid>

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
            {/* {dataForCard} */}
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default Jobs;