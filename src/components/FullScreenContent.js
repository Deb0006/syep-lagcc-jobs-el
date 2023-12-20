import { Typography, Box } from "@mui/material";
import Slideshow from "./Slideshow"

function FullScreenContent() {
  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "100%",
        height: "250px",
        overflowX: "auto",
        minWidth: "240px",
        textAlign: "center",
      }}
    >
      {/* <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        Explore Your Potential: Diverse Job Opportunities Await
      </Typography> */}

      <Slideshow />
    </Box>
  );
}

// FullScreenContent.displayName = "FullScreenContent";

export default FullScreenContent;
