"use client";

import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import './clients.scss'

const CLIENTS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

export function Clients() {
  const IMAGE_PARTS = 4;
  const AUTOCHANGE_TIME = 4000;

  const slides = [
    {
      heading: "WHO WE ARE",
      decs: "AQUA GREEN is leading the packaged drinking water manufacturer and supplier in the Western part of India.AQUA GREEN has a pure and refreshing taste, which can be attributed to its unique arrangement of minerals and trace elements.We start with the Local water supply, which is then filtered by reverse osmosis to remove impurities. The purified water is then enhanced with a special blend of minerals for the pure, crisp, fresh water taste that’s delightfully AQUA GREEN.",
      city: 'Paris',
      country: 'France',
      img: '/bgimage.png',
    },
    {
      heading: "Quality Process",
      decs: "Water is carefully collected and received through stainless steel pipes from a local well. Quality testing of the original source is conducted regularly to monitor for abnormalities. A water softener is used to reduce water hardness. Demineralization removes unwanted minerals (through reverse osmosis or distillation).Water received in storage tanks is monitored on a daily basis.",
      city: 'Singapore',
      img: 'bottle5.png',
    },
    // {
    //   city: 'Prague',
    //   country: 'Czech Republic',
    //   img: '/bgimage.png',
    // },

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
      <div className=" py-28  bg-gray-50 md:mt-[70vh] lg:mt-[80vh] xl:mt-[75vh] ">

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
                  <div className=''>
                    <h2 className="slider__slide-heading text-green-600 font-bold !text-base md:!text-7xl !flex !justify-center mt-10 ">
                      {slide.heading.split('').map((l, i) => {
                        return (<span key={i} className={`${l === " " && "sm:ml-8 ml-3"}`}>{l}</span>)
                      })}
                    </h2>
                    <p className="slider__slide-readmore max-w-7xl px-8 !leading-8 !text-base !text-center font-semibold text-gray-600">{slide?.decs}</p>
                  </div>
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
      </div>
    </>
  );
}

export default Clients;
