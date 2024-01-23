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
          const worksiteIDString = job.WorksiteID && job.WorksiteID.toString();
          return worksiteIDString && savedJobsIds.includes(worksiteIDString);
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
            <Button autoFocus color="inherit" onClick={handleClose}>
              Apply
            </Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Typography sx={{ paddingTop: "20px", paddingBottom: "20px" }}>
            Your SYEP application is NOT complete until you fill out the Google
            Form with your information and your 3 top job choices!
          </Typography>
          <Button variant="outlined" onClick={handleClose}>
            CLick to Apply
          </Button>
        </Container>

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
      </Dialog>
    </React.Fragment>
  );
}
