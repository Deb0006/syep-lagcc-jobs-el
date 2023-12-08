import JobCard from "../components/JobCard";
import { useState, useEffect } from "react";
import Layout from '../components/Layout';
import Head from 'next/head';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';


  const Jobs = () => {
    
    const jobData = [
      { id: 1, title: 'Software Engineer', company: 'Company D', location:'Manhattan', zipcode: 10001, jobCategory: 'Technology', visible:true,backgroundCheck:false, iconName: 'CodeOutlinedIcon', description:'Seeking a talented Software Engineer to join our team in developing cutting-edge software solutions.'},
      { id: 2, title: 'Sales Associate', company: 'Company E', location:'Brooklyn', zipcode: 11201, jobCategory: 'Retail', visible:true,backgroundCheck:true, iconName: 'ShoppingBasketOutlinedIcon', description:'Looking for a friendly and customer-oriented Sales Associate to join our team at a busy retail store.'},
      { id: 3, title: 'Registered Nurse', company: 'Company F', location:'Queens', zipcode: 11101, jobCategory: 'Healthcare', visible:true,backgroundCheck:true, iconName: 'LocalHospitalOutlinedIcon', description:'We are currently hiring Registered Nurses to provide compassionate care to our patients in a fast-paced environment.' },
      { id: 4, title: 'Graphic Designer', company: 'Company G', location:'Queens', zipcode: 11368, jobCategory: 'Design', visible:true, backgroundCheck:false, iconName: 'PaletteOutlinedIcon', description:'Join our creative team as a Graphic Designer and contribute to the development of visually stunning designs.'},
      { id: 5, title: 'Financial Analyst', company: 'Company H', location:'Manhattan', zipcode: 10022, jobCategory: 'Finance', visible:true, backgroundCheck:true, iconName: 'AccountBalanceOutlinedIcon', description:'We are hiring a detail-oriented Financial Analyst to provide in-depth analysis and financial reports.'},
      { id: 6, title: 'Marketing Manager', company: 'Company I', location:'Brooklyn', zipcode: 11215, jobCategory: 'Marketing', visible:true, backgroundCheck:true, iconName: 'MarketingOutlinedIcon', description:'Looking for an experienced Marketing Manager to develop and implement effective marketing strategies.'},
      { id: 7, title: 'Customer Service Representative', company: 'Company J', location:'Bronx', zipcode: 10456, jobCategory: 'Customer Service', visible:true, backgroundCheck:false, iconName: 'PeopleAltOutlinedIcon', description:'Join our team as a Customer Service Representative and assist customers with their inquiries and concerns.'},
      { id: 8, title: 'Data Scientist', company: 'Company K', location:'Manhattan', zipcode: 10016, jobCategory: 'Technology', visible:true, backgroundCheck:true, iconName: 'AssessmentOutlinedIcon', description:'We are seeking a skilled Data Scientist to analyze large datasets and extract valuable insights for our organization.'},
      { id: 9, title: 'Human Resources Manager', company: 'Company L', location:'Brooklyn', zipcode: 11221, jobCategory: 'Human Resources', visible:true, backgroundCheck:true, iconName: 'SupervisorAccountOutlinedIcon', description:'Looking for a confident and experienced Human Resources Manager to oversee all HR operations.'},
      { id: 10, title: 'Registered Dietitian', company: 'Company M', location:'Queens', zipcode: 11373, jobCategory: 'Healthcare', visible:true, backgroundCheck:true, iconName: 'RestaurantMenuOutlinedIcon', description:'Join our team of healthcare professionals as a Registered Dietitian and provide nutritional guidance to patients.'},
     ];
 
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
  
  const [filters, setFilters] = useState({
    jobCategory: '',
    location: '',
    zipcode: '',
  });

  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };
  

  const filteredJobs = jobData.filter((item) => {
    const categoryMatch = !filters.jobCategory || item.jobCategory === filters.jobCategory;
    const locationMatch = !filters.location || item.location === filters.location;
    const zipcodeMatch = !filters.zipcode || item.zipcode.toString() === filters.zipcode.toString();

    return categoryMatch && locationMatch && zipcodeMatch;
  });



  const dataForCard = filteredJobs.map((item) => (
    <Grid item xs={12} sm={6} md={4} key={item.id}>
      <JobCard
        key={item.id}
        title={item.title}
        company={item.company}
        zipcode={item.zipcode}
        location={item.location}
        jobCategory={item.jobCategory}
        description={item.description}
        iconName={item.iconName}
        backgroundCheck={item.backgroundCheck}
      />
    </Grid>
  ));

  return (
    <Layout>
      <Head>
        <title>Jobs Page</title>
      </Head>
      <Box display="flex" flexDirection="column" rowGap={2} style={{margin:'0 auto' }}>
        <Typography variant="h4" gutterBottom>
          Jobs and Internships
        </Typography>
        <Typography variant="h6" gutterBottom>
          Start by looking for jobs that match your interests or your location:
        </Typography>
        <Grid container  style={{ columnGap: '16px' }}>
          <TextField
            select
            label="Job Category"
            value={filters.jobCategory}
            onChange={(e) => handleFilterChange('jobCategory', e.target.value)}
            style={{  width: '200px' }}
          >
            <MenuItem value="">All</MenuItem>
              {jobData.map(job => (
                <MenuItem key ={job.id}   value={job.jobCategory}>{job.jobCategory}</MenuItem>
              ))}
          </TextField>

          <TextField
          select
            label="Location"
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            style={{ width: '200px' }}
          >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Queens">Queens</MenuItem>
          <MenuItem value="Manhattan">Manhattan</MenuItem>
          <MenuItem value="Bronx">Bronx</MenuItem>
            {/* Add more categories as needed */}
          </TextField>

          <TextField
            label="Zipcode"
            value={filters.zipcode}
            onChange={(e) => handleFilterChange('zipcode', e.target.value)}
            style={{ width: '100px' }}
          />
        </Grid>
        <Grid container spacing={2} style={{margin:'0 auto' }}>
          {dataForCard}
        </Grid>
      </Box>
    </Layout>
  );
};

export default Jobs;