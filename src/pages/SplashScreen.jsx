import Image from "next/image";
import React from "react";
import logo from "../../public/assets/images/logo.png";
import tie from "../../public/assets/images/tie.png";

const SplashScreen = () => {
  return (
    <div className="h-screen bg-gradient-to-bl from-container-blue to-blue-300 w-full relative flex justify-center align-middle">
      <Image
        className="animate-splash h-[600px] w-[200px] mt-28 2xl:mt-60 animate-reverse "
        src={logo}
        alt="logo"
        height={500}
      />

      <Image
        className=" animate-wiggle h-[140px] w-[50px]   absolute 2xl:top-[475px] 2xl:left-[850px] top-[345px] left-[580px]"
        src={tie}
        alt="logo"
        height={270}
      />

      <div className=" animate-slide absolute w-1 2xl:h-[200px] 2xl:top-[435px]   h-[200px] top-[300px]  bg-gray-600"></div>
      <p className=" animate-slidetext absolute 2xl:h-[200px] 2xl:top-[435px] 2xl:left-[1100px] 2xl:text-5xl text-2xl left-[800px] top-[350px] font-extrabold font-raleway text-white">
        Get Hired
      </p>
      <p className="animate-slidetext absolute 2xl:h-[200px] 2xl:top-[555px] 2xl:left-[1100px] left-[800px] top-[400px] 2xl:text-5xl text-2xl font-extrabold font-raleway text-white">
        Don't Get Fired
      </p>
    </div>
  );
};

export default SplashScreen;
