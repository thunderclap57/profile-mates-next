
import React from "react";

import { FaFileImage } from "react-icons/fa";


const AddMoreDetails = () => {
  return (
    <form>
      <div className="flex flex-row ">
        <div className="flex flex-col pt-12 ">
          <div className="flex flex-row mt-2">
            <div className="flex text-black text-md font-sans ml-10 mt-5  flex-col  font-extrabold">
              <label htmlFor="fname">Education:</label>

              <div className="flex text-black text-md font-sans  mt-5 gap-4  flex-row  font-extrabold">
                <select
                  className="w-40 rounded-xl py-4 flex text-center"
                  name="cars"
                  id="cars"
                >
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                <input
                  className="w-40 rounded-xl py-4  caret-black focus:caret-red-500"
                  type="text"
                  id="fname"
                  name="fname"
                />
                <input
                  className="w-40 rounded-xl py-4  caret-black focus:caret-red-500"
                  type="text"
                  id="fname"
                  name="fname"
                />
              </div>

              <div className="flex flex-col text-black text-md font-sans mt-5 font-extrabold">
                <label htmlFor="fname">DOB:</label>
                <div className="flex flex-row mt-2 gap-5">
                  <input
                    className="w-40 rounded-xl  py-4  caret-black focus:caret-red-500 "
                    type="text"
                    id="fname"
                    name="fname"
                  />
                  <input
                    className="w-40 rounded-xl  py-4  caret-black focus:caret-red-500 "
                    type="text"
                    id="fname"
                    name="fname"
                  />
                </div>
                <div className="flex flex-row mt-2 gap-5">
                  <input
                    className="w-40 rounded-xl  py-4  caret-black focus:caret-red-500 "
                    type="text"
                    id="fname"
                    name="fname"
                  />
                  <input
                    className="w-40 rounded-xl  py-4  caret-black focus:caret-red-500 "
                    type="text"
                    id="fname"
                    name="fname"
                  />
                </div>

                <div className="flex flex-row mt-2 gap-5">
                  <input
                    className="w-40 rounded-xl  py-4  caret-black focus:caret-red-500 "
                    type="text"
                    id="fname"
                    name="fname"
                  />
                  <input
                    className="w-40 rounded-xl  py-4  caret-black focus:caret-red-500 "
                    type="text"
                    id="fname"
                    name="fname"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-col ml-20 gap-4 font-extrabold">
              <label htmlFor="fname">Languages Known:</label>
              <input
                className="w-80 rounded-xl py-4  caret-black focus:caret-red-500"
                type="text"
                id="fname"
                name="fname"
              />
              <input
                className="w-80 rounded-xl py-4  caret-black focus:caret-red-500"
                type="text"
                id="fname"
                name="fname"
              />
              <input
                className="w-80 rounded-xl py-4  caret-black focus:caret-red-500"
                type="text"
                id="fname"
                name="fname"
              />
              <input
                className="w-80 rounded-xl py-4  caret-black focus:caret-red-500"
                type="text"
                id="fname"
                name="fname"
              />
            </div>
          </div>
          <div className="flex flex-col ml-10 text-black text-md font-sans   font-extrabold mt-4">
            <label htmlFor="fname">Projects:</label>
            <h1>*Mention your Projects(Photos optional)</h1>
            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-4 justify-center items-center">
                <input
                  className="w-72 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                  type="text"
                  id="fname"
                  name="fname"
                />
                <FaFileImage size={50} color="white" />
              </div>

              <div className="flex flex-row gap-4 justify-center items-center">
                <input
                  className="w-72 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                  type="text"
                  id="fname"
                  name="fname"
                />
                <FaFileImage size={50} color="white" />
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-4 justify-center items-center">
                <input
                  className="w-72 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                  type="text"
                  id="fname"
                  name="fname"
                />
                <FaFileImage size={50} color="white" />
              </div>

              <div className="flex flex-row gap-4 justify-center items-center">
                <input
                  className="w-72 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                  type="text"
                  id="fname"
                  name="fname"
                />
                <FaFileImage size={50} color="white" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-10 text-black text-md font-sans   font-extrabold mt-4">
            <label htmlFor="fname">References:</label>

            <div className="flex flex-row gap-4 ">
              <input
                className="w-72 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="text"
                id="fname"
                name="fname"
              />

              <input
                className="w-72 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="text"
                id="fname"
                name="fname"
              />

              <input
                className="w-72 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="text"
                id="fname"
                name="fname"
              />
            </div>

            <div className="flex flex-row gap-4">
              <input
                className="w-72 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="text"
                id="fname"
                name="fname"
              />

              <input
                className="w-72 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="text"
                id="fname"
                name="fname"
              />
              <input
                className="w-72 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="text"
                id="fname"
                name="fname"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddMoreDetails;
