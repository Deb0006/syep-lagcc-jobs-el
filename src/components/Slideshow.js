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
        <Box sx={{ width: '100%'}}>
            <List component={Stack} direction="row">
                {images.map((image,index) => (
                    <ListItem  key={index}>
                        <Paper elevation={0} 
                        style={{
                            width: 160,
                            height: 160,
                            padding: '25px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background:'linear-gradient(126deg, #FFE3D3 0%, #E1EFFF 98.58%)'
                        }}
                        >
                                <Image
                                src={image}
                                alt={`Image ${index + 1}`}
                                width={100}
                                height={100}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                  }}
                                loading="lazy"
                                />
                            
                        </Paper>
                    </ListItem>
                    ))}
            </List>
      </Box>
   
    )
  }