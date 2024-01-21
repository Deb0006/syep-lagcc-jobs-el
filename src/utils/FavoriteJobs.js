export function addToFavorite(jobID) {
  if (typeof window !== "undefined") {
    let savedJobs = JSON.parse(window.localStorage.getItem("savedJobs")) || [];
    if (!savedJobs.includes(jobID)) {
      savedJobs.push(jobID);
    }
    window.localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  }
}

export function removeFromFavorite(jobID) {
     if (typeof window !== "undefined") {
       let savedJobs =
         JSON.parse(window.localStorage.getItem("savedJobs")) || [];
       const jobIndex = savedJobs.indexOf(jobID);
       if (jobIndex > -1) {
         savedJobs.splice(jobIndex, 1);
       }
       window.localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
     }
}

export function isJobSaved(jobID) {
 if (typeof window !== "undefined") {
   let savedJobs = JSON.parse(window.localStorage.getItem("savedJobs")) || [];
   return savedJobs.includes(jobID);
 }

 return false;
}

export function getSavedJobs() {
  let jobs = []; // initialize array
  if (typeof window !== "undefined") {
    let savedJobsIds =
      JSON.parse(window.localStorage.getItem("savedJobs")) || [];
    let parsedData = getDataFromYourSource(); // place your function to get jobs data here
    // Filter your jobs array
    jobs = parsedData.filter((job) => savedJobsIds.includes(job.id));
  }
  return jobs;
}
