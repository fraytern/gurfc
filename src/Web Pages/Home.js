import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Head from './Components/Navbar';
import Footer from './Components/Footer';
import SlidePics from '../Slideshow';

function Home() {
  return (
    <>
      <Head />
      <div className='home-main'>
        <h1 className='welcome'>Welcome to the official website of the Georgetown University Rugby Club!</h1>
      </div>
      <Footer />
    </>
  );
}

export default Home;