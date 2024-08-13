"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";
import { useEffect, useRef, useState } from "react";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development:",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      " I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children:
      "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.",
  },
  {
    icon: HashtagIcon,
    title: " Web Optimization",
    children:
      "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  },
  {
    icon: EyeIcon,
    title: "User-Centric Design",
    children:
      "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children:
      "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  },
];

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleSecond, setIsVisibleSecond] = useState(false);
  const animationRef = useRef(null);
  const animationRef2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, // Adjust as needed
      }
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleSecond(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, // Adjust as needed
      }
    );

    if (animationRef2.current) {
      observer.observe(animationRef2.current);
    }

    return () => {
      if (animationRef2.current) {
        observer.unobserve(animationRef2.current);
      }
    };
  }, []);

  return (
    <div className="px-8 max-w-screen bg-gray-50 overflow-x-hidden">
      <div ref={animationRef} className={`container mx-auto mb-20 text-center  ${isVisible ? ' animate__animated  animate__fadeInRight  visible' : 'invisible'} `}>
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          WHO WE ARE
        </Typography>
        {/* <Typography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </Typography> */}
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          AQUA GREEN is leading the packaged drinking water manufacturer and supplier in the Western part of India.AQUA GREEN has a pure and refreshing taste, which can be attributed to its unique arrangement of minerals and trace elements.We start with the Local water supply, which is then filtered by reverse osmosis to remove impurities. The purified water is then enhanced with a special blend of minerals for the pure, crisp, fresh water taste that’s delightfully AQUA GREEN.
        </Typography>
      </div>
      <div ref={animationRef2} className={`container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 ${isVisibleSecond ? ' animate__animated  animate__fadeInLeft  visible' : 'invisible'}`}>
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
