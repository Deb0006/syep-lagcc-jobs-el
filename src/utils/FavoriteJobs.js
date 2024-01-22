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

export function getSavedJobs(parsedData) {
  let savedJobs = [];
  if (typeof window !== "undefined") {
    let savedJobsIds =
      JSON.parse(window.localStorage.getItem("savedJobs")) || [];
    // Filter your jobs array
    savedJobs = parsedData
      .flatMap((company) => company.jobs)
      .filter((job) => savedJobsIds.includes(job.id));
  }
  return savedJobs;
}