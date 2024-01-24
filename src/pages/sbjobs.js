
import React, { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import JobCard from "../components/JobCard";
import { getSavedJobs } from "../utils/FavoriteJobs";

export default function SBJobs({ parsedData }) {
  // State to keep track of saved jobs
  const [jobs, setJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);

 
  return (
    <Layout> 
      <h1>SYEP School Based Jobs</h1>

      <p>No jobs available. Come back later.</p>
    </Layout>
  );
}