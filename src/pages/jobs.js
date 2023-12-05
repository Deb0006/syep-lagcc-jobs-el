import JobCard from "../components/JobCard";
import { useState, useEffect } from "react";
// import styles from "../styles/Results.module.css";
import Layout from '../components/Layout';
import Grid from "@mui/material/Grid";


  const Jobs = () => {
    
    const jobData = [
      { id: 1, title: 'Job 1', company: 'Company A', location:'Manhattan', zipcode: 11101, jobCategory: 'Marketing', visible:true,backgroundCheck:false, iconName: 'CampaignTwoToneIcon', description:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'},
      { id: 2, title: 'Job 2', company: 'Company B', location:'Queens', zipcode: 11102, jobCategory: 'Retail', visible:true,backgroundCheck:true, iconName: 'StorefrontTwoToneIcon', description:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'},
      { id: 3, title: 'Job 3', company: 'Company C', location:'Queens', zipcode: 11103, jobCategory: 'Nursing', visible:true,backgroundCheck:true, iconName: 'HealthAndSafetyOutlinedIcon', description:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' },
      // Add more job data as needed
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

  const dataForCard = jobData.map((item) => {
    if (item.visible === true) {
      return (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <JobCard
            key={item.id}
            title={item.title}
            company={item.company}
            zipcode = {item.zipcode}
            location = {item.location}
            jobCategory = {item.jobCategory}
            description={item.description}
            iconName ={item.iconName}
            backgroundCheck={item.backgroundCheck}
          />
        </Grid>
      );
    }
  });

  return (
    <Layout>
      <div >
        <h1 >Jobs and Internships</h1>
        <h2>
          Start by looking for jobs that match your interests or your Zipcode:
        </h2>
        <Grid container spacing={2}>
          {dataForCard}
        </Grid>
      </div>
    </Layout>
  );
};

export default Jobs;