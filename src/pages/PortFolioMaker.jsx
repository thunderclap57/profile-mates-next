import React, { useEffect } from "react";
import Portfolio from "../../public/assets/images/portfolio.gif";
import Coding from "../../public/assets/images/coding.gif";
import { Parallax } from "react-parallax";
import Image from "next/image";
import "aos/dist/aos.css";
import Aos from "aos";
const PortFolioMaker = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Parallax
      className=" font-raleway text-4xl items-center text-center relative h-[100vh] flex  justify-center"
      bgImage="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
      bgImageAlt="the cat"
      strength={800}
    >
      <div className="flex flex-row   px-5">
        <div className="flex flex-col text-xl font-raleway">
          <h1
            data-aos="fade-up"
            className="mt-[50px]  text-2xl text-start font-bold font-raleway"
          >
            ONLINE PORTFOLIO MAKER
          </h1>
          <p
            data-aos="fade-up"
            className="text-lg justify-center pr-[200px] text-start mt-10 font-semibold font-raleway"
          >
            A good digital portfolio shines a light on your work. Profile Mate
            helps you feature your work in a professional way with beautiful,
            custom digital portfolios created within minutes. Make an
            e-portfolio that will grab everyone’s attention. Get started for
            free.
          </p>
        </div>
        <div className="bg-white bg-opacity-20  backdrop-blur-lg h-[500px] hover:scale-110 rounded-xl w-[1200px] shadow-xl relative">
          <Image
            data-aos="flip-right"
            className="absolute   bottom-0 left-0 rounded-3xl  shadow-lg"
            src={Portfolio}
            alt="free"
            height="300"
            width="300"
          />
          <Image
            data-aos="flip-right"
            className="absolute   right-0 top-0 rounded-3xl  shadow-lg"
            src={Coding}
            alt="free"
            height="300"
            width="300"
          />
        </div>
      </div>
    </Parallax>
  );
};

export default PortFolioMaker;
