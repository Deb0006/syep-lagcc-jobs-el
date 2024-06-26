import {Box } from "@mui/material";
import Slideshow from "./Slideshow"

function FullScreenContent() {
  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "100%",
        height: "260px",
        overflowX: "auto",
        minWidth: "240px",
        maxWidth:"1500px",
        textAlign: "center",
      }}
    >

      <Slideshow />
    </Box>
  );
}


export default FullScreenContent;
