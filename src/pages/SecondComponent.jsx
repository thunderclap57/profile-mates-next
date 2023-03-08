import Image from "next/image";
import { Parallax } from "react-parallax";
import "aos/dist/aos.css";
import resume from "../../public/assets/images/resume.gif";
import Aos from "aos";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
const SecondComponent = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Parallax
      className=" font-raleway text-4xl items-center text-center px-5 relative h-[100vh] "
      bgImage="https://images.unsplash.com/photo-1617704716344-8d987ac681a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
      bgImageAlt="the cat"
      strength={200}
    >
      <div className="mt-10 xl:mt-20 md:text-2xl xl:text-4xl">
        <Typewriter
          options={{
            strings: ["WHY USE PROFILE MATE?"],
            autoStart: true,
            loop: true,
            skipAddStyles: false,
          }}
        />
      </div>
      <div className="flex flex-row mt-10">
        <div className="flex flex-col text-xl font-ralewatext-blackfont-semibold xl:mt-[230px] ">
          <h1
            data-aos="fade-up"
            className="mt-[50px] pr-10 text-2xl text-start font-bold font-raleway xl:text-4xl md:text-lg"
          >
            PROFESSIONAL TEMPLATES
          </h1>
          <p
            data-aos="fade-up"
            className="text-lg justify-center text-start mt-10 font-semibold font-raleway xl:text-2xl "
          >
            Choose professional, elegant, creative, or modern resume templates.
            You can easily change colors and adapt the layout to any resume
            format you choose: functional, reverse-chronological, or
            combination.
          </p>
        </div>
        <Image
          data-aos="fade-left"
          className=" rounded-full shadow-2xl xl:mt-[70px] -mt:50px md:h-[300px] xl:h-[500px]"
          src={resume}
          height="50"
          width="500"
          alt="resume"
        />
      </div>
    </Parallax>
  );
};

export default SecondComponent;
