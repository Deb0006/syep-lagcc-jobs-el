import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container} from '@mui/material';

export default function Layout({ children }) {

    return (
      <div>
        <Navbar />
        <Container 
          sx={{paddingTop: 2,
          paddingBottom: 3, 
          maxWidth: 'lg',
          margin: '0 auto', // Centers the container horizontally
          }}>
          {children}
        </Container>
        <Footer />
      </div>
    );
  }