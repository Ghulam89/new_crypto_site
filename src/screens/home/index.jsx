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
      
    <div className=' tw-relative'>
    <div  className=' tw-text-center'>
      <h2 className="  tw-pt-16  sm:tw-pt-0 tw-text-textColor">
            Your Referral <span className=" tw-text-primary"> Reward</span>
          </h2>
      </div>


    <Brands/>

    <div className=" tw-absolute tw-left-0  tw-bottom-[30%]">
        <img src={require("../../assets/images/WhiteBluePinkLeft.png")} className=" sm:tw-w-44 tw-w-36" alt="" />
      </div>



      <div className=" tw-absolute tw-left-20 tw-bottom-[100%] ">
        <img
          src={require("../../assets/images/heroLeft.png")}
          className=" sm:tw-w-32 tw-w-28"
          alt=""
        />
      </div>
    </div>
      
      <About/>
      {/* <Tokenomics/> */}
      {/* <RoadMap/> */}
      {/* <Team/> */}
      {/* <FAQ/> */}
      <Footer/>
    </div>
  );
};

export default Home;