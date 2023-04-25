import React, { useState, useEffect } from "react";

import { storage } from "../Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";
import loading from "../../public/assets/images/loading.json";

const AddDetails = (props) => {

  const [uploadImages, setImage] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [loader, setLoader] = useState(true);
  const [a, setA] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    image: '',
    awards: '',
    linkedIn: '',
    indeed: '',
    certifications: '',
    gitHub: '',
    hackerRank: '',
    image: null,
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData)
  };

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
        console.log(typeof url);
        
        setFormData({ ...formData, image: url })
      });
    });

  };


  const handleData = () => {

    // if (formData.name == "" || formData.dob == "" || formData.email == "" || formData.phone == "" || formData.awards == "" || formData.linkedIn == "" || formData.Github == "" || formData.indeed == "" || formData.certifications == "" || formData.hackerrank == "") {
    //   alert("Fill in all the Details");
    // } else {

    //   props.onDataReceived(formData, true);

    // }
    props.onDataReceived(formData, true);
  };
  return (
    
      <div className="flex flex-row text-black">
        <div className="flex flex-col 2xl:gap-4">
          <div className="flex flex-row">
            <div className="flex flex-col text-black text-md font-sans ml-10 mt-20  font-extrabold">
              <label htmlFor="name " className="text-white">Name:</label>
              <input
                className="w-96 rounded-xl py-4  caret-black focus:caret-red-500"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            {a == 0 && !imgUrl ? (
              <div className="flex justify-center md:mt-20 md:ml-5 text-black">
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
                  className="bg-blue-700 w-20 rounded-sm h-10 mt-6 ml-5 text-white"
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
          {a == 1 && loader == true && (
            <Player
              src={loading}
              className="player absolute z-2 left-[965px] top-[170px]"
              loop
              autoplay
              style={{ height: "200px", width: "200px" }}
            />
          )}

          <div className="flex flex-row mt-2">
            <div className="flex flex-col text-black text-md font-sans ml-10  font-extrabold">
              <label htmlFor="dob" className="text-white">DOB:</label>
              <input
                className="w-60 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="text"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col text-black text-md font-sans ml-10  font-extrabold">
              <label htmlFor="phone" className="text-white">Phone No:</label>
              <input
                className="w-96 rounded-xl mt-4 py-4 caret-black focus:caret-red-500"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-row mt-2">
            <div className="flex flex-col text-black text-md font-sans ml-10  font-extrabold mt-2">
              <label htmlFor="email" className="text-white">Email:</label>

              <input
                className="w-96 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col text-black text-md font-sans ml-10  font-extrabold">
              <label htmlFor="awards" className="text-white">Awards:</label>
              <input
                className="w-96 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="text"
                id="awards"
                name="awards"
                value={formData.awards}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col text-black text-md font-sans ml-10  font-extrabold">
              <label htmlFor="linkedIn" className="text-white">Linked In:</label>
              <input
                className="w-96 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="text"
                id="linkedIn"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col text-black text-md font-sans ml-10  font-extrabold">
              <label htmlFor="indeed" className="text-white">Indeed:</label>
              <input
                className="w-96 rounded-xl mt-4 py-4 caret-black focus:caret-red-500"
                type="text"
                id="indeed"
                name="indeed"
                value={formData.indeed}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex flex-row mt-2 ">
            <div className="flex flex-col text-black text-md font-sans ml-10  font-extrabold">
              <label htmlFor="Github" className="text-white">GitHub:</label>
              <input
                className="w-96 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="text"
                id="gitHub"
                name="gitHub"
                value={formData.gitHub}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col text-black text-md font-sans ml-10  font-extrabold">
              <label htmlFor="hackerrank" className="text-white">Hacker Rank Score:</label>
              <input
                className="w-96 rounded-xl mt-4 py-4 caret-black focus:caret-red-500"
                type="text"
                id="hackerRank"
                name="hackerRank"
                value={formData.hackerRank}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-col text-black text-md font-sans ml-10   font-extrabold">
            <label htmlFor="certifications" className="text-white">Certifications:</label>
            <h1 className="text-sm text-white">
              *Add a drive link which includes your Certificates
            </h1>
            <input
              className="w-96 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
              type="text"
              id="certifications"
              name="certifications"
              value={formData.certifications}
              onChange={handleInputChange}
            />
          </div>

          <button onClick={handleData}>
            <a
              href="#_"
              className="inline-flex ml-80 -mt-20  items-center w-full px-10 py-3 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-black focus-within:bg-blue-700 focus-within:border-blue-700"
            >
              Submit
            </a>
          </button>
          <p className="text-white ml-[510px]">Double Click to Submit</p>
        </div>

      </div>
    
  );
};

export default AddDetails;
