"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import waterBottle from '../../public/bottle.png'

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    waterBottle,
    '/bottle.png',
    '/waterbottle.png',
    '/bottledwater-3.jpg',
    '/bottle-4.jpg'
    // "/docs/images/carousel/carousel-2.svg",
    // "/docs/images/carousel/carousel-3.svg",
    // "/docs/images/carousel/carousel-4.svg",
    // "/docs/images/carousel/carousel-5.svg",
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  return (
    <header className="bg-gray-50">
      <div className="max-w-7xl  px-8 container mx-auto grid h-full gap-10  w-full grid-cols-1 items-center">
        <div className=" relative w-full " >
          <div className="bg-image right-0 fixed w-full h-[70vh] -z-10 opacity-90 bg-gray-50">
          </div>
          <div className="md:absolute flex md:flex-row flex-col gap-6 lg:mt-[10%] md:mt-[25%] mt-[10%]">
            <div className="md:w-1/2 w-full backdrop-blur-xl h-fit p-6 mt-10 rounded-xl shadow-2xl animate__animated animate__fadeInLeft ">
              <div className="flex text-green-600 xl:text-6xl md:text-3xl text-xl mx-auto w-fit md:font-bold font-semibold">AQUA GREEN</div>
              <div className="flex text-gray-800 font-[monospace] xl:text-base  text-xs md:font-medium font-normal lg:font-semibold lg:mt-5 mt-3 mx-auto max-w-7xl text-center">The manufacturing of AQUA GREEN packaged drinking water involves multiple levels of stringent filtration processes and tests before it’s served to our customers. Chlorination- Reduces the microbial load in the feed water. Pressure Sand Filter – Removes all the suspended solids and particles, bringing the water substantial clarity.Activated Carbon Filtration- Removes contaminants like color, odor, and various other organic impurities by absorption.Bag Filter-Removes fine particles, to control the load on micron filters.</div>
            </div>
            <div className="md:w-1/2 w-full  rounded-xl flex items-center h-fit backdrop-blur-2xl justify-center shadow-2xl md:mt-36 animate__animated animate__fadeInRight">
              <img src={'/bottle4.png'} className="w-full h-[80%]" />
            </div>
          </div>
          {/* <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={nextSlide}
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button> */}
        </div>
      </div>
    </header >
  );
}

export default Hero;
