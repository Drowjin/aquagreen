"use client";

import { Footer, Navbar } from "@/components";
import { Roboto } from 'next/font/google'
import './about.css'
import ContactForm from "../contact-form";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className={` ${roboto.className} bg-[#eceff1]`}>
        <div className="bg-image-about h-[50vh] max-w-7xl container mx-auto lg:grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 w-full">
          <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center bg-inherit animate__animated animate__fadeInRight -translate-x-8 lg:-translate-x-12">
            <div className="w-full flex justify-center lg:justify-start">
            </div>
          </div>
          <div className="box-border backdrop-blur-sm  mx-auto my-auto px-3">
            <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center bg-inherit animate__animated animate__fadeInRight lg:translate-x-12">
              <div className="text-container flex flex-col gap-6 mt-6 lg:mt-0 justify-center items-center">
                <div className="text-blue-900 xl:text-6xl md:text-3xl text-xl text-center">
                  Commitment to Quality
                </div>
                <div
                  className="sm:text-black lg:text-gray-50 mx-auto w-auto"
                >
                  AQUA GREEN is leading the packaged drinking water manufacturer and supplier in the Western part of India.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-image-about1 h-[50vh] max-w-7xl container mx-auto lg:grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 w-full">
          <div className="box-border backdrop-blur-sm  mx-auto my-auto px-3">
            <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center bg-inherit animate__animated animate__fadeInLeft lg:translate-x-12">
              <div className="text-container flex flex-col gap-6 mt-6 lg:mt-0 justify-center items-center">
                <div className="text-blue-900 xl:text-6xl md:text-3xl text-xl text-center">
                  AQUA GREEN
                </div>
                <div
                  className="sm:text-black lg:text-gray-50 mx-auto w-auto"
                >
                  AQUA GREEN has a pure and refreshing taste, which can be attributed to its unique arrangement of minerals and trace elements.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center bg-inherit animate__animated animate__fadeInLeft -translate-x-8 lg:-translate-x-12">
            <div className="w-full flex justify-center lg:justify-start">
            </div>
          </div>
        </div>
        <ContactForm />
        <Footer />
      </div>
    </>

  )

}