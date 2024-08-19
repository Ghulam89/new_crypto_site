import React from 'react';
import Hero from '../../components/hero';
import Brands from '../../components/Brands';
import Footer from '../../components/footer';
import Team from '../../components/Team';
import FAQ from '../../components/FAQ';
import Tokenomics from '../../components/tokenomics';
import RoadMap from '../../components/RoadMap';
import About from '../../components/About/About';
const Home = () => {
  return (
    <div className=' tw-overflow-x-hidden'>
      <Hero />
    {/* <div className=' tw-overflow-x-hidden'>
    <Brands/>
    </div>
       */}
      {/* <About/> */}
      {/* <Tokenomics/> */}
      {/* <RoadMap/> */}
      {/* <Team/> */}
      {/* <FAQ/> */}
      <Footer/>
    </div>
  );
};

export default Home;