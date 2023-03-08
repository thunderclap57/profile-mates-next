import React, { useEffect, useState } from "react";

import TemplateResume from "./TemplateResume";
import TemplatePortFolio from "./TemplatePortFolio";
const TemplatePage = () => {
  const [resumeShow, setResumeShow] = useState(true);
  const [portfolioShow, setportfolioShow] = useState(false);

  const showResumeTemplates = () => {
    setResumeShow(true);
    setportfolioShow(false);
  };
  const showPortfolioTemplate = () => {
    setResumeShow(false);
    setportfolioShow(true);
  };

  return (
    <div className="bg-gradient-to-br from-container-blue to-black h-screen w-full flex-col   ">
      <button className="rounded-full w-10 h-10 relative float-right hover:scale-105 shadow-2xl drop-shadow-2xl bg-white mr-5 top-2 "></button>
      <div className=" bg-opacity-20 backdrop-blur-lg  drop-shadow-2xl h-[80vh] flex justify-center mx-20 top relative 2xl:top-16 bg-white rounded-3xl">
        <div className=" flex items-center justify-center   drop-shadow-2xl h-20 w-[500px]   relative 2xl:top-10 bg-white rounded-3xl ">
          <button onClick={showResumeTemplates}>
            <div className="h-[50px] w-[200px] flex items-center hover:translate-x-10  ease  transition duration-300  justify-center hover:bg-gradient-to-r from-container-blue to-purple-600 hover:text-white text-lg border-solid border-black border-2  rounded-3xl ">
              Resumes
            </div>
          </button>

          <button onClick={showPortfolioTemplate}>
            <div className="h-[50px] w-[200px] flex items-center hover:-translate-x-10  ease  transition duration-300  justify-center hover:bg-gradient-to-r from-container-blue to-purple-600 hover:text-white text-lg border-solid border-black border-2  rounded-3xl ">
              Portfolio
            </div>
          </button>
        </div>
        <div
          data-aos="fade-right"
          className={
            !resumeShow
              ? "hidden"
              : "h-auto w-auto absolute top-40 flex-row justify-center items-center flex gap-5 2xl:top-60"
          }
        >
          <TemplateResume />
        </div>
        <div
          data-aos="fade-right"
          className={
            !portfolioShow
              ? "hidden"
              : "h-auto w-auto absolute top-40 flex-row justify-center items-center flex gap-5 2xl:top-60"
          }
        >
          <TemplatePortFolio />
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
