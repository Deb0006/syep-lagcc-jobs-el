import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Image from 'next/image';

export default function Slideshow() {
    const images = [
        '/Job1.png',
        '/Job2.png',
        '/Job3.png',
        '/Job4.png',
        '/Job5.png',
        '/Job6.png',
      ];

    return (
      <Box sx={{ width: "100%", paddingLeft: "10px" }}>
        <List component={Stack} direction="row">
          {images.map((image, index) => (
            <ListItem key={index} sx={{  }}>
              <Paper
                elevation={0}
                style={{
                  width: 180,
                  height: 180,
                  padding: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(131deg, #95B4F5 0%, #E5A2D2 96.8%)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={120}
                  height={120}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  loading="lazy"
                />
              </Paper>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }