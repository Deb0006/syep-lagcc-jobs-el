import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Footer() {
  return (
    <Box bgcolor="#9AA2C9" height={100} sx={{padding:'5'}}>
      <Typography
        style={{
          fontWeight: "bold",
        }}
      >
        CONTACT US Phone: (718) 482-5340 (718) 609-2132
      </Typography>
      <Typography
        style={{
          fontWeight: "bold",
        }}
      >
        Email: SYEP (All SYEP participant and work partner inquiries):
        syep@lagcc.cuny.edu
      </Typography>
    </Box>
  );
}
