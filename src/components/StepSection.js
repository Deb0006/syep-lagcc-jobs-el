import { Typography, Box } from "@mui/material";
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
        height: "330px",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        color: "white",
        borderRadius: "10px",

        background: `
        /* External Noise Image */
         url('/noise3.jpg'),
        /* Gradient Background */
        linear-gradient(to bottom right, #38556A, #9182C4)
    
  `,
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        color: "white",
        padding: "20px",
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
        <Typography variant="h4" paddingTop={2} paddingBottom={2} fontWeight="bold">
          {step}
        </Typography>
        <Typography variant="p">{description}</Typography>
      </Box>
    </Paper>
  );
};

export default StepSection;