import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import { DialogContext } from "../pages/_app"; 
import { useEffect, useState } from "react";
import SavedJobCard from "./SavedJobCard";


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

  // NEW COMPONENT
  const jobCardsComponent = savedJobs.map((job, jIndex) => {
    return (
      // For each job, create a JobCard component
      <Grid item xs={12} sm={12} md={6} key={jIndex}>
        <SavedJobCard
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
        />
      </Grid>
    );
  });
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            // color: "black",
            filter:
              'progid: DXImageTransform.Microsoft.gradient( startColorstr="#AFAFAF", endColorstr="#96c6ea", GradientType=1 )',
            background: "rgba( 0, 42, 90, 0.7 )",
            backdropFilter: "blur( 1.0px )",
            borderRadius: "0 0 10px 10px",
            border: "1px solid rgba( 0, 42, 90, 0.1 )",
            boxShadow: "none",
          }}
        >
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
              href="https://form.jotform.com/241586358098167"
              target="_blank"
              sx={{ color: "white" }}
            >
              Apply
            </Button>
          </Toolbar>
        </AppBar>

        <Box
          sx={{ padding: "20px", background: "#f0f0f0", paddingTop: "75px" }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h6">
                Your job selection is NOT complete until you{" "}
                <strong>fill out the Placement Form</strong> with your
                information.
              </Typography>

              <Typography variant="h6" paddingTop={2}>
                If you are ready select your 2 job choices, click the Placement
                Form Button
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                href="https://form.jotform.com/241586358098167"
                target="_blank"
                variant="outlined"
                color="warning"
                style={{
                  padding: "10px 30px",
                  width: "100%",
                  borderWidth: "3px",
                  borderRadius: "10px",
                  marginLeft: { sm: "auto", md: "auto" },
                }}
              >
                Placement Form
              </Button>
            </Grid>
          </Grid>
          <Typography variant="h6" paddingTop={2}>
            <strong>Your saved jobs:</strong>
          </Typography>
          <Grid
            container
            spacing={{ xs: 0, sm: 0, md: 1 }}
            rowGap={1}
            paddingRight={{ xs: 0, sm: 0, md: 1 }}
            style={{
              margin: "0 auto",
            }}
          >
            {jobCardsComponent}
          </Grid>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
