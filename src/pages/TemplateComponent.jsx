import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import "aos/dist/aos.css";
import Aos from "aos";
import templatePic from "../../public/assets/images/template-pic.jpg";
import Image from "next/image";
const TemplateComponent = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Parallax
      className=" font-raleway text-4xl items-center text-center  h-[100vh] my-10 "
      bgImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
      bgImageAlt="the cat"
      strength={800}
    >
      <h1
        data-aos="fade-up"
        className="mt-[100px] text-white flex flex-col text-4xl text-center font-raleway"
      >
        WRITE YOUR PROFESSIONAL RESUME ONLINE.
      </h1>

      <p
        data-aos="fade-right"
        className="text-xl justify-center text-center   text-white mt-10 font-semibold font-raleway"
      >
        DOWNLOAD WITH A SINGLE CLICK GET NOTICED AND LAND THAT DREAM JOB.
      </p>

      <Image
        data-aos="zoom-in-up"
        className="shadow-lg  relative md:ml-10 md:w-[750px]  xl:w-[2200px] xl:ml-0 md:px-10 lg:px-20 mt-10 xl:px-10 2xl:ml-20 "
        src={templatePic}
        alt="free"
      />
      <div
        data-aos="fade-up"
        className="absolute  z-[90] sm:top-[250px] sm:left-[400px] xl:top-[350px] xl:left-[750px] md:top-[280px] md:left-[250px]  2xl:top-[350px] 2xl:left-[1000px] "
      >
        <a
          href="#_"
          className="relative inline-flex items-center justify-center px-16 bg-white bg-opacity-20 backdrop-blur-lg  py-5 overflow-hidden font-thin text-indigo-600 transition duration-300 ease-out border-2 border-red-700 rounded-full shadow-md group"
        >
          <span className="absolute inset-0  flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-700 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute text-xl font-raleway flex items-center justify-center w-full h-full text-red-700 transition-all duration-300 transform group-hover:translate-x-full ease">
            CHOOSE TEMPLATE
          </span>
          <span className="relative invisible">Button Text</span>
        </a>
      </div>
    </Parallax>
  );
};

export default TemplateComponent;