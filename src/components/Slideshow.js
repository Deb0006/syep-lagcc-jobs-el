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
                  // background: "F1FBFF",
                  // backgroundImage: "radial-gradient( circle farthest-corner at 0.2% 0.5%,  rgba(68,36,164,1) 3.7%, rgba(84,212,228,1) 92.7% )",
                  // background-image: radial-gradient( circle farthest-corner at 0.2% 0.5%,  rgba(68,36,164,1) 3.7%, rgba(84,212,228,1) 92.7% ),
                  // background: "linear-gradient(131deg, #95B4F5 0%, #E5A2D2 96.8%)",

                  // background: "#D5C7E8",

                  // backgroundImage: 'linear-gradient(to right top, #051937, #34265b, #702872, #b01d77, #eb1267)',
                  // background: "rgba(255, 255, 255, 0.2)",
                  // borderRadius: "10px",
                  // backdropFilter: "blur(1.3px)",
                  // border: "2px solid rgba(255, 255, 255, 0.07)",
                  // boxShadow:" 0 4px 30px rgba(0, 0, 0, 0.1)",
                  
                  // background: 'hsla(0, 0%, 69%, 1)',

                  // background: 'linear-gradient(90deg, hsla(0, 0%, 69%, 1) 0%, hsla(206, 67%, 75%, 1) 100%)',

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