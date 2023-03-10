import React, { useState } from "react";
import addImg from "../../public/assets/images/add-details.jpg";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import AddDetails from "./AddDetails";
import AddMoreDetails from "./AddMoreDetails";
import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.replace("/SetupPage");
  };
  const [page, setPage] = useState(0);
  const title = ["Enter your Details", "Enter your Details"];
  const PageDisplay = () => {
    if (page === 0) {
      return <AddDetails />;
    } else if (page === 1) {
      return <AddMoreDetails />;
    }
  };
  return (
    <div className="bg-gradient-to-bl from-purple-700 to-black h-screen w-full   ">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg flex items-center justify-center  drop-shadow-lg md:h-[97vh]  mr-[100px] ml-10 relative top-2  rounded-xl ">
        <div className="flex flex-row">
          {page === title.length - 1 && (
            <div className="text-white my-96">
              <AiOutlineArrowLeft
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
                size={35}
              />
            </div>
          )}
          <div className="flex flex-col">{PageDisplay()}</div>
          <div className="my-20 mx-10">
            <div className=" md:text-2xl xl:text-4xl text-white flex-col flex">
              <Typewriter
                options={{
                  strings: title[page],
                  autoStart: true,
                  loop: true,
                  skipAddStyles: false,
                }}
              />

              <Image
                className="rounded-2xl  "
                src={addImg}
                alt="add details image"
                width={400}
              />
              {page === title.length - 1 && (
                <button
                  onClick={handleNavigate}
                  className="relative mt-5 inline-flex items-center bg-white bg-opacity-20 backdrop-blur-lg justify-center  md:px-12 px-20 md:py-3 py-5 overflow-hidden   transition duration-300 ease-out   rounded-2xl shadow-md group"
                >
                  <span className="absolute inset-0  flex items-center justify-center w-full h-full text-container-blue duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
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
                  <span className="absolute font-raleway flex items-center justify-center w-full h-full text-white text-3xl transition-all  duration-300 transform group-hover:translate-x-full ease">
                    <h1>Lets Go!</h1>
                  </span>
                  <span className="relative invisible">Button Text</span>
                </button>
              )}
            </div>
          </div>
          {page === 0 && (
            <div className="text-white my-96">
              <AiOutlineArrowRight
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
                size={35}
              />
            </div>
          )}
        </div>
        <div className="absolute bottom-2 rounded-full right-5  ">
          <div
            className={
              page === 0
                ? `border-blue-600 border-t-8 border-l-8  w-36 h-36 rounded-full duration-[500ms] transition-all ease-in-out  flex items-center justify-center `
                : `border-green-700 border-8  w-36 h-36 rounded-full duration-[500ms] transition-all ease-in-out flex items-center justify-center `
            }
          >
            {page === 0 ? (
              <h1 className="text-2xl text-blue-200 font-extrabold animate-pulse">
                50%
              </h1>
            ) : (
              <h1 className="text-2xl text-green-200 font-extrabold animate-bounce">
                100%
              </h1>
            )}
          </div>
        </div>

        <div className="w-36 h-36 bg-transparent rounded-full   dark:bg-gray-700"></div>
      </div>
    </div>
  );
};

export default Details;
