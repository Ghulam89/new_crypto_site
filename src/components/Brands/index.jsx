import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Brands = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4, // Set to 4 slides to show at all times
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay
    speed: 500, // Adjust speed for smoother sliding
    cssEase: "ease", // Change to ease for a smoother effect
    arrows: true,
    prevArrow: (
      <div className="prev-arrow tw-w-12 tw-h-12 tw-flex tw-justify-center tw-items-center tw-left-[-20px]">
        <FaArrowLeft className="tw-text-textColor" />
      </div>
    ),
    nextArrow: (
      <div className="next-arrow tw-w-12 tw-h-12 tw-flex tw-justify-center tw-items-center tw-right-[-20px]">
        <FaArrowRightLong className="tw-text-textColor" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4, // Show 4 slides on screens larger than 1200px
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4, // Show 4 slides on screens larger than 992px
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Show 3 slides on screens larger than 768px
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2, // Show 2 slides on screens larger than 576px
        },
      },
    ],
  };

  const brands = [
    { src: "brand1.png", name: "Level 1" },
    { src: "brand2.png", name: "Level 2" },
    { src: "brand3.png", name: "Level 3" },
    { src: "brand4.png", name: "Level 4" },
    { src: "brand5.png", name: "Level 5" },
    // Add more brands as needed
  ];

  return (
    <div className="tw-relative tw-mt-12 tw-flex tw-items-center tw-justify-center">
      <div className="container tw-mx-auto">
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div className="tw-p-3">

          
            <div
              key={index}
              className="tw-border-2 p-4  tw-rounded-tr-3xl tw-rounded-bl-3xl tw-border-textColor "
            >
              <div className="  tw-flex tw-justify-end">

                <div className=" tw-w-10 tw-rounded-md tw-flex tw-justify-center  tw-items-center tw-h-10 tw-bg-green">
                  <span className=" tw-text-white tw-font-poppins tw-text-sm"> 2%</span>
                </div>

              </div>
              <h4 className="tw-text-xl tw-mt-2 tw-font-semibold tw-text-center">
                {brand.name}
              </h4>
              <div className="tw-w-full tw-flex-col tw-flex tw-justify-between tw-items-center">
                <div className="tw-flex tw-justify-between tw-items-center tw-w-full tw-my-2">
                  <span className="tw-text-textColor">Total Earning</span>
                  <span className="tw-text-textColor">200.00</span>
                </div>
                <div className="tw-flex tw-justify-between tw-items-center tw-w-full">
                  <span className="tw-text-textColor">Team</span>
                  <span className="tw-text-textColor">02</span>
                </div>
              </div>
            </div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
