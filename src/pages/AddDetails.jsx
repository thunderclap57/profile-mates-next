import React, { useState, useEffect } from "react";

import { storage } from "../Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";
import loading from "../../public/assets/images/loading.json";

const AddDetails = (props) => {
  const [isDone, setdone] = useState(false);
  const [uploadImages, setImage] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [loader, setLoader] = useState(true);
  const [a, setA] = useState(0);
  const uploadImage = () => {
    setA(1);
    if (!uploadImages) {
      console.log("Image is not defined");
      return;
    }
    const imageRef = ref(storage, `images/${uploadImages.name + uuidv4()}`);
    uploadBytes(imageRef, uploadImages).then((snapshot) => {
      console.log("uploaded");

      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        setImgUrl(url);
        setLoader(false);
        console.log(imgUrl);
      });
    });
  };
  const sendDataToParent = (data, done) => {
    console.log(done);
    props.onDataReceived(data, done);
  };
  const handleData = () => {
    setdone(true);

    sendDataToParent(imgUrl, true);
  };
  return (
    <form>
      <div className="flex flex-row ">
        <div className="flex flex-col pt-12 2xl:gap-4">
          <div className="flex flex-row mt-2">
            <div className="flex flex-col text-white text-md font-sans ml-10 mt-5  font-extrabold">
              <label htmlFor="fname">Name:</label>
              <input
                className="w-96 rounded-xl py-4  caret-black focus:caret-red-500"
                type="text"
                id="fname"
                name="fname"
              />
            </div>
            {!imgUrl ? (
              <div className="flex justify-center md:mt-8 md:ml-24 text-white">
                <div className="mb-3 w-80">
                  <label htmlFor="FileLg">Image:</label>
                  <input
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                    className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded-full border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-xl font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-1.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:bg-white focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent"
                    id="FileLg"
                    type="file"
                  />
                </div>
                <button
                  className="bg-blue-700 w-20 rounded-sm h-10 mt-6 ml-5"
                  type="button"
                  onClick={uploadImage}
                >
                  Upload
                </button>
              </div>
            ) : (
              <Image
                className="h-28 w-28 ml-48 mt-2 rounded-full border-4 border-white drop-shadow-2xl shadow-2xl"
                src={imgUrl}
                width={100}
                height={100}
                alt=""
                loading="lazy"
              />
            )}
          </div>
          {a === 1 && loader === true && (
            <Player
              src={loading}
              className="player"
              loop
              autoplay
              style={{ height: "100px", width: "100px" }}
            />
          )}
          <div className="flex flex-row mt-2">
            <div className="flex flex-col text-white text-md font-sans ml-10  font-extrabold">
              <label htmlFor="fname">DOB:</label>
              <input
                className="w-60 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="text"
                id="fname"
                name="fname"
              />
            </div>
            <div className="flex flex-col text-white text-md font-sans ml-10  font-extrabold">
              <label htmlFor="fname">Phone No:</label>
              <input
                className="w-96 rounded-xl mt-4 py-4 caret-black focus:caret-red-500"
                type="tel"
                id="fname"
                name="fname"
              />
            </div>
          </div>
          <div className="flex flex-row mt-2">
            <div className="flex flex-col text-white text-md font-sans ml-10  font-extrabold mt-2">
              <label htmlFor="fname">Email:</label>

              <input
                className="w-96 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="text"
                id="fname"
                name="fname"
              />
            </div>
            <div className="flex flex-col text-white text-md font-sans ml-10  font-extrabold">
              <label htmlFor="fname">Awards:</label>
              <input
                className="w-96 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="text"
                id="fname"
                name="fname"
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col text-white text-md font-sans ml-10  font-extrabold">
              <label htmlFor="fname">Linked In:</label>
              <input
                className="w-96 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="text"
                id="fname"
                name="fname"
                
              />
            </div>
            <div className="flex flex-col text-white text-md font-sans ml-10  font-extrabold">
              <label htmlFor="fname">Indeed:</label>
              <input
                className="w-96 rounded-xl mt-4 py-4 caret-black focus:caret-red-500"
                type="tel"
                id="fname"
                name="fname"
              />
            </div>
          </div>
          <div className="flex flex-col text-white text-md font-sans ml-10  font-extrabold">
            <label htmlFor="fname">Certifications:</label>
            <h1 className="text-sm">
              *Add a drive link which includes your Certificates
            </h1>
            <input
              className="w-96 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
              type="text"
              id="fname"
              name="fname"
            />
          </div>
          <div className="flex flex-row mt-2 ">
            <div className="flex flex-col text-white text-md font-sans ml-10  font-extrabold">
              <label htmlFor="fname">GitHub:</label>
              <input
                className="w-96 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="text"
                id="fname"
                name="fname"
              />
            </div>
            <div className="flex flex-col text-white text-md font-sans ml-10  font-extrabold">
              <label htmlFor="fname">Hacker Rank:</label>
              <input
                className="w-96 rounded-xl mt-4 py-4 caret-black focus:caret-red-500"
                type="tel"
                id="fname"
                name="fname"
              />
            </div>
          </div>
          {!isDone ? (
            <button className="ml-10" onClick={handleData}>
              <a
                href="#_"
                className="inline-flex ml-20 items-center w-full px-10 py-3 mt-10  text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
              >
                Submit
              </a>
            </button>
          ) : (
            <p className="text-xl ml-10 text-white">
              Details Submitted move to next page...if you want to edit the
              details you can edit it later
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default AddDetails;
