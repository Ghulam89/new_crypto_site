import React, { useState } from "react";
import Button from "../Button";
import { FaAngleDown, FaArrowRight } from "react-icons/fa6";
import Header from "../header";
import Counter from "../Counter";
import VideoPlayer from "../videoPlayer";
import { FaAngleUp } from "react-icons/fa";
import { PiCopyLight } from "react-icons/pi";
import VideoSlider from "../videoSlider";
import Staking from "../../screens/Staking";
import { GoCopy } from "react-icons/go";
const Hero = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("MATIC");

  const handleSelect = (currency) => {
    setSelectedCurrency(currency);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const getBorderColor = (currency) => {
    return selectedCurrency === currency
      ? "tw-border-[#00F0FF] tw-border-2"
      : "tw-border-[#456DA7]";
  };

  const [selectedButton, setSelectedButton] = useState(null);

  const handleBSelect = (button) => {
    setSelectedButton(button);
  };

  const getBBorderColor = (button) => {
    return selectedButton === button
      ? "tw-border-[#00F0FF] tw-border-2"
      : "tw-border-white";
  };

  const openPdfInNewTab = () => {
    const pdfUrl = require("../../assets/images/YouSamaritan White Paper v2.pdf");
    window.open(pdfUrl, "_blank");
  };

  const [openVideo, setOpenVideo] = useState(false);
  return (
    <div className="   tw-bg-cover tw-relative tw-bg-center tw-w-full tw-h-auto">
      <Header />

      <div className="container tw-relative  tw-pb-44 tw-pt-6">
        <div className=" tw-text-center">
          <h1 className=" tw-text-primary">
            GEE  <span className=" tw-text-textColor">MINER</span>
          </h1>
        </div>
        <div className="row    g-5 tw-items-center">
          <div className="col-lg-6">
           <div className=" row">
            <div className=" col-md-10 tw-mx-auto">
            <Staking />
            </div>
           </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className=" row  g-4">
              <div className=" col-md-6">
                <div className=" tw-border  tw-border-textColor tw-rounded-bl-3xl  tw-rounded-tr-3xl  p-4">
                  <h6 className="   tw-text-textColor tw-font-poppins">
                    Total Investment
                  </h6>
                  <span className="  tw-text-textColor tw-font-poppins tw-text-lg">
                    {" "}
                    0
                  </span>
                </div>
              </div>
              <div className=" col-md-6">
                <div className=" tw-border  tw-border-textColor tw-rounded-bl-3xl  tw-rounded-tr-3xl  p-4">
                  <h6 className="  tw-text-textColor  tw-font-poppins">
                    Total Earning
                  </h6>
                  <span className="  tw-text-textColor tw-font-poppins tw-text-lg">
                    {" "}
                    0
                  </span>
                </div>
              </div>
              <div className=" col-md-6">
                <div className=" tw-border  tw-border-textColor tw-rounded-bl-3xl  tw-rounded-tr-3xl  p-4">
                  <h6 className="  tw-text-textColor  tw-font-poppins">
                    Current Balance
                  </h6>
                  <span className="  tw-text-textColor tw-font-poppins tw-text-lg">
                    {" "}
                    0
                  </span>
                </div>
              </div>
              <div className=" col-md-6">
                <div className=" tw-border  tw-border-textColor tw-rounded-bl-3xl  tw-rounded-tr-3xl  p-4">
                  <h6 className="   tw-text-textColor tw-font-poppins">
                    Total Referrals
                  </h6>
                  <span className="  tw-text-textColor tw-font-poppins tw-text-lg">
                    {" "}
                    0
                  </span>
                </div>
              </div>
              <div className=" col-md-12">
                <div className=" tw-border  tw-border-textColor tw-rounded-bl-3xl  tw-rounded-tr-3xl  p-4">
                  <h6 className="  tw-text-textColor  tw-font-poppins tw-flex tw-gap-3 tw-items-center">
                    My Link <GoCopy size={23} color="#FFE247" />{" "}
                  </h6>
                  <span className="  tw-text-textColor tw-font-poppins tw-text-lg">
                    https://StakeEarning.world/?ref=..
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" tw-absolute tw-right-0  tw-hidden  md:tw-block tw-top-0">
        <img src={require("../../assets/images/WhiteBluePink.png")} alt=""  className=" tw-w-44" />
      </div>



      <div className=" tw-absolute  tw-hidden  md:tw-block tw-right-20 tw-top-44">
        <img
          src={require("../../assets/images/hero_right.png")}
          className="   tw-w-40"
          alt=""
        />
      </div>




     
     
    </div>
  );
};

export default Hero;
