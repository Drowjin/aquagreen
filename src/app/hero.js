"use client";

import { Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <>
      <div className="max-w-7xl px-8 container mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 w-full h-full relative">
        {/* Card 1: Image on the Left */}
        <div style={{ boxShadow: '#81d4fa 20px 60px 200px inset' }} className="mobile-shadow-1 lg:relative md:rounded-xl lg:rounded-xl md:relative lg:left-[35px] lg:top-[60px] md:z-0 md:left-[10px] md:top-[30px] lg:z-0 w-full h-full flex flex-col lg:flex-row justify-center items-center bg-gray-50 shadow-2xl animate__animated animate__fadeInLeft p-6 -translate-x-8 lg:-translate-x-12">
          <div className="w-full flex justify-center lg:justify-start">
            <img src={'/bottle4.png'} className="w-3/4 lg:w-full h-auto !object-cover" alt="Aqua Green Bottle" />
          </div>
        </div>

        {/* Card 2: Text on the Right */}
        <div className="lg:relative md:relative lg:z-10 md:z-10 lg:right-[35px] md:right-[10px] w-full h-full flex flex-col lg:flex-row justify-center items-center bg-gray-50 md:rounded-xl ld:rounded-xl shadow-2xl animate__animated animate__fadeInRight p-6 lg:translate-x-12">
          <div className="text-container flex flex-col gap-6 mt-6 lg:mt-0 justify-center items-center">
            <div className="text-light-blue-200 xl:text-6xl md:text-3xl text-xl font-bold text-center lg:text-left">
              AQUA GREEN
            </div>
            {/* <div className="text-gray-500 xl:text-base text-xs md:font-medium font-normal lg:font-semibold lg:mt-5 mt-3 text-center lg:text-left max-w-full"> */}
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:w-11/12"
            >
              The manufacturing of AQUA GREEN packaged drinking water involves multiple levels of stringent filtration processes and tests before it’s served to our customers. Chlorination - Reduces the microbial load in the feed water. Pressure Sand Filter – Removes all the suspended solids and particles, bringing the water substantial clarity. Activated Carbon Filtration - Removes contaminants like color, odor, and various other organic impurities by absorption. Bag Filter - Removes fine particles, to control the load on micron filters.
            </Typography>
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl px-8 container mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 w-full h-full relative mt-20">
        {/* Card 2: Text on the Right */}
        <div className="order-last md:order-first lg:relative md:rounded-xl lg:rounded-xl md:relative lg:left-[35px] lg:top-[60px] md:z-10 md:left-[10px] md:top-[30px] lg:z-10 w-full h-full flex flex-col lg:flex-row justify-center items-center bg-gray-50 ld:rounded-xl shadow-2xl animate__animated animate__fadeInLeft p-6 -translate-x-8 lg:translate-x-12">
          <div className="text-container flex flex-col gap-6 mt-6 lg:mt-0 justify-center items-center">
            <div className="text-green-200 xl:text-6xl md:text-3xl text-xl font-bold text-center lg:text-left">
              WHO WE ARE
            </div>
            {/* <div className="text-gray-500 xl:text-base text-xs md:font-medium font-normal lg:font-semibold lg:mt-5 mt-3 text-center lg:text-left max-w-full"> */}
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:w-11/12"
            >
              AQUA GREEN is leading the packaged drinking water manufacturer and supplier in the Western part of India.AQUA GREEN has a pure and refreshing taste, which can be attributed to its unique arrangement of minerals and trace elements.We start with the Local water supply, which is then filtered by reverse osmosis to remove impurities. The purified water is then enhanced with a special blend of minerals for the pure, crisp, fresh water taste that’s delightfully AQUA GREEN.
            </Typography>
            {/* </div> */}
          </div>
        </div>
        {/* Card 1: Image on the Left */}
        <div style={{ boxShadow: '#c8e6c9 0px 0px 150px 60px inset' }} className="mobile-shadow-2 lg:right-[35px] md:right-[10px] order-first md:order-last md:rounded-xl lg:rounded-xl lg:relative md:relative lg:z-0 md:z-0 w-full h-full flex flex-col lg:flex-row justify-center items-center bg-gray-50 shadow-2xl animate__animated animate__fadeInRight p-6 -translate-x-8 lg:-translate-x-12">
          <div className="w-full flex justify-center lg:justify-start">
            <img src={'/edit-second.png'} className="w-3/4 lg:w-full h-auto !object-cover" alt="Aqua Green Bottle" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl px-8 container mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 w-full h-full relative mt-20">
        {/* Card 1: Image on the Left */}
        <div style={{ boxShadow: '#b39ddb 20px 60px 200px inset' }} className="mobile-shadow-3 lg:relative md:rounded-xl lg:rounded-xl md:relative lg:left-[35px] lg:top-[60px] md:z-0 md:left-[10px] md:top-[30px] lg:z-0 w-full h-full flex flex-col lg:flex-row justify-center items-center bg-gray-50 shadow-2xl animate__animated animate__fadeInLeft p-6 -translate-x-8 lg:-translate-x-12">
          <div className="w-full flex justify-center lg:justify-start">
            <img src={'/edit-third.png'} className="w-3/4 lg:w-full h-auto !object-cover" alt="Aqua Green Bottle" />
          </div>
        </div>

        {/* Card 2: Text on the Right */}
        <div className="lg:relative md:relative lg:z-10 md:z-10 lg:right-[35px] md:right-[10px] w-full h-full flex flex-col lg:flex-row justify-center items-center bg-gray-50 md:rounded-xl ld:rounded-xl shadow-2xl animate__animated animate__fadeInRight p-6 lg:translate-x-12">
          <div className="text-container flex flex-col gap-6 mt-6 lg:mt-0 justify-center items-center">
            <div className="text-deep-purple-200 xl:text-6xl md:text-3xl text-xl font-bold text-center lg:text-left">
              Quality Process
            </div>
            {/* <div className="text-gray-500 xl:text-base text-xs md:font-medium font-normal lg:font-semibold lg:mt-5 mt-3 text-center lg:text-left max-w-full"> */}
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:w-11/12"
            >
              Water is carefully collected and received through stainless steel pipes from a local well. Quality testing of the original source is conducted regularly to monitor for abnormalities. A water softener is used to reduce water hardness. Demineralization removes unwanted minerals (through reverse osmosis or distillation).Water received in storage tanks is monitored on a daily basis.
            </Typography>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
