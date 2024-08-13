"use client";

import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import './clients.scss'

export function Clients() {
  const IMAGE_PARTS = 4;
  const AUTOCHANGE_TIME = 4000;

  const slides = [
    {
      heading: "AQUA GREEN Packaged Mineral Drinking Water",
      decs: "Experience the refreshing purity of AQUA GREEN, a premium packaged mineral drinking water that quenches your thirst and ensures your well-being with every sip. Our commitment to quality means you can trust that each bottle delivers nothing but the best in hydration.",
      city: 'Paris',
      country: 'France',
      img: '/bgimage.png',
    },
    {
      heading: "Advanced Filtration Process",
      decs: "AQUA GREEN undergoes a sophisticated multi-level filtration process to ensure the highest quality and safety standards. We start with a thorough chlorination process that reduces the microbial load in the feed water, laying the groundwork for pure and clean drinking water.",
      city: 'Singapore',
      img: 'bottle5.png',
    },
    {
      heading: 'Pressure Sand Filtration',
      decs: "Our pressure sand filtration system effectively removes suspended solids and particles, giving the water substantial clarity. This essential step ensures that each bottle of AQUA GREEN is visually appealing and free from impurities.",
      city: 'Paris',
      country: 'Paris',
      img: '/singlebottle.png',
    },

  ];

  const [activeSlide, setActiveSlide] = useState(-1);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(false);
  const changeTO = useRef(null);

  useEffect(() => {
    runAutochangeTO();
    setTimeout(() => {
      setActiveSlide(0);
      setSliderReady(true);
    }, 0);
    return () => {
      clearTimeout(changeTO.current);
    };
  }, []);

  const runAutochangeTO = () => {
    changeTO.current = setTimeout(() => {
      changeSlides(1);
      runAutochangeTO();
    }, AUTOCHANGE_TIME);
  };

  const changeSlides = (change) => {
    clearTimeout(changeTO.current);
    const length = slides.length;
    const prev = activeSlide;
    let active = prev + change;
    if (active < 0) active = length - 1;
    if (active >= length) active = 0;
    setActiveSlide(active);
    setPrevSlide(prev);
  };
  return (
    <>
      {/* <div className=" py-28  bg-gray-50 md:mt-[70vh] lg:mt-[80vh] xl:mt-[75vh] "> */}
      <div className={`${classNames('slider', { 's--ready': sliderReady })} bg-gray-50`}>
        {/* <p className="slider__top-heading">Travelers</p> */}
        <div className="slider__slides">
          {slides.map((slide, index) => (
            <div
              className={classNames('slider__slide', {
                's--active': activeSlide === index,
                's--prev': prevSlide === index,
              })}
              key={slide.city}
            >
              <div className="slider__slide-content">
                <h3 className="slider__slide-subheading"></h3>

                <h2 className="slider__slide-heading text-light-blue-800 font-bold !text-base md:!text-4xl !flex !justify-center mt-10 ">
                  {slide.heading.split('').map((l, i) => {
                    return (<span key={i} className={`${l === " " && "sm:ml-8 ml-3"}`}>{l}</span>)
                  })}
                </h2>
                <p className="slider__slide-readmore max-w-7xl px-8 !leading-8 !text-base !text-center font-semibold text-gray-600">{slide?.decs}</p>

              </div>
              <div className="slider__slide-parts">
                {[...Array(IMAGE_PARTS).keys()].map((i) => (
                  <div className="slider__slide-part" key={i}>
                    <div className="slider__slide-part-inner opacity-60" style={{ backgroundImage: `url(${slide.img})` }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="slider__control" onClick={() => changeSlides(-1)} />
        <div className="slider__control slider__control--right" onClick={() => changeSlides(1)} />
      </div>
      {/* </div> */}
    </>
  );
}

export default Clients;
