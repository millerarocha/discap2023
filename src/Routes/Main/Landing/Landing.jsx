import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Jobs from './Jobs';
import News from './News';
import Donations from './Donations';
import Footer from '../../../common/Footer';

const Landing = () => {
  return (
    <>
      <div className='container mx-auto'>
        <Navbar />
        <Hero />
        <About />
        <News />
        <Jobs />
        <Donations />
      </div>
      <Footer />
    </>
  );
};

export default Landing;
