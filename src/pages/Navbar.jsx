import Image from "next/image";
import Link from "next/link";
import { AiFillCloseCircle } from "react-icons/ai";
import logo from "../../public/assets/images/logo.webp";
import signup from "../../public/assets/images/signup.jpeg";
import signupMan from "../../public/assets/images/signup_man.png";
import login from "../../public/assets/images/login.gif";
import React, { useState } from "react";
import "aos/dist/aos.css";

import { useRouter } from "next/router";
const Navbar = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [nav, setNav] = useState(false);
  const [navi, setNavi] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleNavi = () => {
    setNavi(!navi);
  };
  const handleClick = () => {
    router.push("/Details");
  };
  return (
    <div
      data-aos="fade-right"
      className=" bg-gradient-to-r from-container-blue to-blue-600  w-full  h-[80px] fixed shadow-2xl drop-shadow-2xl text-white font-bold z-[200] "
    >
      <div className=" flex justify-between items-center w-full px-5">
        <div className="relative flex flex-row w-16 h-16 mt-2  object-fill">
          <Image
            className="rounded-full border border-gray-100 shadow-sm"
            src={logo}
            alt="user image"
          />
          <h1 className="mt-5 ml-5">Gareeb0o</h1>
          <h1 className="mt-5 ml-2">MATES </h1>
        </div>
        <div className="mt-5 ">
          <ul className="hidden md:flex flex-row">
            <Link href="/">
              <li className=" ml-10 text-sm uppercase  hover:rounded-full hover:bg-slate-100 hover:w-auto hover:text-black hover:text-lg hover:px-2">
                Home
              </li>
            </Link>
            <Link href="/#aboutus">
              <li className=" ml-10 text-sm uppercase  hover:rounded-full hover:bg-slate-100 hover:w-auto hover:text-black hover:text-lg hover:px-2">
                About us
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={handleNavi}
                className=" ml-10 text-sm uppercase  hover:rounded-full hover:bg-slate-100 hover:w-auto hover:text-black hover:text-lg hover:px-2"
              >
                Login
              </li>
            </Link>
            <Link onClick={handleNav} href="/">
              <li className=" ml-10 text-sm uppercase  hover:rounded-full hover:bg-slate-100 hover:w-auto hover:text-black hover:text-lg hover:px-2">
                Sign-up
              </li>
            </Link>
          </ul>
        </div>
      </div>
      {/* signup */}
      <div
        className={
          !nav
            ? "hidden"
            : "fixed top-0 left-0 w-full h-screen bg-black/90 flex items-center justify-center"
        }
      >
        <div onClick={handleNav} className=" absolute top-0 right-0 pr-2">
          <AiFillCloseCircle size={50} />
        </div>
        <div
          className={
            "fixed flex flex-row  h-[500px] w-[1000px] rounded-2xl shadow-2xl shadow-white/20 "
          }
        >
          <Image
            className="relative"
            width={500}
            height={500}
            src={signup}
            alt="signup"
          ></Image>
          <Image
            className="absolute inset-x-0 bottom-0 left-40"
            width={200}
            height={200}
            src={signupMan}
            alt="signup"
          ></Image>

          <div className="w-full  text-black">
            <div className="bg-white bg-opacity-50 w-full h-full rounded drop-shadow-lg text-white">
              <h1 className="text-center text-4xl  ">SIGN UP</h1>
              <div className="text-white px-5 mt-5">
                <form>
                  <h1 className="mt-5">NAME</h1>
                  <input
                    type="text"
                    value={name}
                    placeholder="Enter your Name "
                    onChange={(e) => setName(e.target.value)}
                    className=" border-white bg-white bg-opacity-50 w-full h-10  drop-shadow-lg "
                  />
                  <h1 className="mt-5">EMAIL</h1>
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    className=" border-white bg-white bg-opacity-50 w-full h-10  drop-shadow-lg "
                  />
                  <h1 className="mt-5">PASSWORD</h1>
                  <input
                    type="text"
                    placeholder="Enter your Password "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className=" border-white bg-white bg-opacity-50 w-full h-10  drop-shadow-lg "
                  />

                  <div className="flex items-center mt-5">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="link-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      I agree with the
                      <a
                        href="#"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        terms and conditions
                      </a>
                      .
                    </label>
                  </div>
                  <button type="submit">
                    <a
                      href="#_"
                      className="inline-flex items-center w-full px-10 py-3 mt-10 ml-36 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
                    >
                      SIGN UP
                      <svg
                        className="w-4 h-4 ml-2"
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
                    </a>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* login */}
      <div
        className={
          !navi
            ? "hidden"
            : "fixed top-0 left-0 w-full h-screen bg-black/90 flex items-center justify-center "
        }
      >
        <div onClick={handleNavi} className=" absolute top-0 right-0 pr-2">
          <AiFillCloseCircle size={50} />
        </div>

        <div
          className={
            "fixed flex flex-row  h-[500px] w-[1000px]  shadow-2xl shadow-white/20 "
          }
        >
          <Image
            className="relative"
            width={500}
            height={500}
            src={login}
            alt="login"
          ></Image>

          <div className="w-full  text-black">
            <div className="bg-white bg-opacity-50 w-full h-full rounded drop-shadow-lg text-white">
              <h1 className="text-center text-4xl  ">LOGIN</h1>
              <div className="text-white px-5 mt-20">
                <form method="post" action="/">
                  <h1 className="mt-5">EMAIL OR PHONE-NO</h1>
                  <input
                    type="text"
                    placeholder="Enter your Phone-No or Email"
                    className=" border-white bg-white bg-opacity-50 w-full h-10  drop-shadow-lg "
                  />
                  <h1 className="mt-5">PASSWORD</h1>
                  <input
                    type="text"
                    placeholder="Enter your Password "
                    className=" border-white bg-white bg-opacity-50 w-full h-10  drop-shadow-lg "
                  />
                  <button
                    onClick={handleClick}
                    className="inline-flex items-center w-full px-10 py-3 mt-10 ml-36 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
                  >
                    Lets Go
                    <svg
                      className="w-4 h-4 ml-2"
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
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
