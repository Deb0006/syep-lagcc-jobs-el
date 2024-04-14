import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";

import Paper from "@mui/material/Paper";

const StepSection = ({ step, imageSrc, title, description }) => {
  return (
    <Paper
      elevation={0}
      className="secondary"
      style={{
        minWidth: "250px",
        width: "380px",
        height: "300px",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        color: "white",
        borderRadius: "10px",

        background:
          "linear-gradient(197.37deg, #7450DB -0.38%, rgba(138, 234, 240, 0) 101.89%), linear-gradient(115.93deg, #3E88F6 4.86%, rgba(62, 180, 246,0.33) 38.05%, rgba(62, 235, 246, 0) 74.14%), radial-gradient(56.47% 76.87% at 6.92% 7.55%, rgba(62, 136, 246, 0.7) 0%, rgba(62, 158, 246, 0.182) 52.16%, rgba(62, 246, 246, 0) 100%), linear-gradient(306.53deg, #2EE4E3 19.83%, rgba(46, 228, 227, 0) 97.33%)",
        backgroundBlendMode: "normal,normal,normal,normal,normal,normal",
      }}
    >
      <Box
        width={"80%"}
        marginTop={-12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image src={imageSrc} alt={title} width={150} height={200} />
        <Typography variant="h4" paddingTop={2} fontWeight="bold">
          {step}
        </Typography>
        <Typography variant="p">{description}</Typography>
      </Box>
    </Paper>
  );
};

export default StepSection;