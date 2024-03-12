import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Link from "next/link";
import { useContext } from "react";
import { DialogContext } from "../pages/_app"; 
import { Container } from "@mui/material";
import { useEffect, useState } from "react";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const { open, handleClose } = useContext(DialogContext);
  const [savedJobs, setSavedJobs] = useState([]);
  useEffect(() => {
    if (open) {
      if (typeof window !== "undefined") {
        const savedJobsIds =
          JSON.parse(window.localStorage.getItem("savedJobs")) || [];
        const filteredJobs = props.allJobs.filter((job) => {
          const jobIDString = job.jobID && job.jobID.toString();
          return jobIDString && savedJobsIds.includes(jobIDString);
        });
        setSavedJobs(filteredJobs);
      }
    }
  }, [open, props.allJobs]); // Runs the effect whenever `open` or `props.allJobs` changes
  
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Saved Jobs
            </Typography>
            <Button
              autoFocus
              href="https://docs.google.com/forms/d/e/1FAIpQLSdXLpAQdhGv1UVSkHL98OVDdJM-Z7rad9TE88ouwcCqOMNzFA/viewform?usp=sf_link"
              target="_blank"
              sx={{ color: "white" }}
            >
              Apply
            </Button>
          </Toolbar>
        </AppBar>

        <Box sx={{ padding: "20px" }}>
          <Box>
            <Typography variant="h6">
              Your job selection is NOT complete until you fill out the SYEP
              Google Form Application.
            </Typography>
            <Typography variant="h6" paddingTop={2}>
              If you are ready select your 3 job choices, click the Application
              Form Button
            </Typography>
            <Box sx={{width: { xs: "100%", sm: "50%" } }}>
              <Button
                href="https://docs.google.com/forms/d/e/1FAIpQLSdXLpAQdhGv1UVSkHL98OVDdJM-Z7rad9TE88ouwcCqOMNzFA/viewform?usp=sf_link"
                target="_blank"
                variant="outlined"
                color="warning"
                style={{
                  padding: "10px 30px",
                  width: "100%",
                  borderWidth: "3px", // Make the border thicker
                  borderRadius: "10px", // Make the border radius more round
                }}
              >
                Application Form
              </Button>
            </Box>
          </Box>
          {/* <Box
          component="iframe"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdXLpAQdhGv1UVSkHL98OVDdJM-Z7rad9TE88ouwcCqOMNzFA/viewform?embedded=true"
          width="100%"
          height="1385"
          title="Google Form"
        >
          Loading…
        </Box> */}
          <Typography variant="h6" paddingTop={2}>
            <strong>Your saved jobs:</strong>
          </Typography>
          <List>
            {savedJobs.map((job, i) => (
              <React.Fragment key={job.WorksiteID + "__" + i}>
                <ListItemButton>
                  <Box>
                    <Typography key={`jobTitle_${i}`} variant="body2">
                      <strong>{job.JobTitle}</strong>
                    </Typography>
                    <Typography key={`worksiteName_${i}`} variant="body2">
                      {job.WorksiteName}
                    </Typography>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      key={`work_${i}`}
                    >
                      <strong>Work:</strong> {job.SiteImplementation}
                    </Typography>
                    <Typography
                      key={`address_${i}`}
                      color="text.primary"
                      variant="body2"
                    >
                      <strong>Address: </strong>
                      {job.Street +
                        " " +
                        job.City +
                        ", " +
                        job.ZipCode +
                        ", " +
                        job.State}
                    </Typography>
                    <Typography
                      key={`description_${i}`}
                      color="text.primary"
                      variant="body2"
                    >
                      <strong>Job Description: </strong>
                      {job.Duties}
                    </Typography>
                    <Typography
                      key={`requirements_${i}`}
                      color="text.primary"
                      variant="body2"
                    >
                      <strong>Job Requirements: </strong>
                      {job.Requirements}
                    </Typography>
                  </Box>
                </ListItemButton>
                {i < savedJobs.length - 1 && <Divider key={`divider_${i}`} />}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
