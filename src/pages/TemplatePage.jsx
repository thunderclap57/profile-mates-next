import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import axios from "axios";
import { toast } from "react-toastify";
import TemplatePortFolio from "./TemplatePortFolio";
import Aos from "aos";
import TemplateResume from "./TemplateResume";
const TemplatePage = () => {
  const getDetails = async () => {
    console.log(JSON.parse(localStorage.getItem("userid")))
    try {
      const response = await axios.get(
        `http://localhost:5000/user/6445d4c21f0b89c0620c433e`
      );
      console.log(response.data);
      toast.success("Success! Redirecting", {
        position: toast.POSITION.TOP_CENTER,
      });
  
    } catch (error) {
      toast.error("Error" + error, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    
    };
  useEffect(()=>{
    Aos.init({ duration: 1000 });
  getDetails()
  
  })
  const [resumeShow, setResumeShow] = useState(true);
  const [portfolioShow, setportfolioShow] = useState(false);
  const router = useRouter();

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
      <button
        onClick={() => {
          router.push("/EditDetails");
        }}
        className="rounded-full w-10 h-10 relative float-right hover:scale-105 shadow-2xl drop-shadow-2xl bg-white mr-5 top-2 "
      ></button>
      <div className=" bg-opacity-20 backdrop-blur-lg  drop-shadow-2xl h-[80vh] flex justify-center mx-20 top-20 relative 2xl:top-16 bg-white rounded-3xl">
        <div className=" flex items-center justify-center   drop-shadow-2xl h-20 w-[500px] top-10  relative 2xl:top-10 bg-white rounded-3xl ">
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
          >   <TemplateResume />
           
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
