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
            <ListItem key={index} sx={{}}>
              <Paper
                elevation={0}
                style={{
                  width: 210,
                  height: 210,
                  padding: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  
                  filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#AFAFAF", endColorstr="#96c6ea", GradientType=1 )',
                  background: 'rgba( 255, 255, 255, 0.05 )',
                  backdropFilter: 'blur( 1.0px )',
                  borderRadius: '10px',
                  border: '2px solid rgba( 255, 255, 255, 0.18 )',
                  
                

                }}
              >
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={130}
                  height={130}
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