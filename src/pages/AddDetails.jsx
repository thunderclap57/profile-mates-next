import React from "react";

const AddDetails = () => {
  return (
    <form>
      <div className="flex flex-row ">
        <div className="flex flex-col pt-12 2xl:gap-4">
          <div className="flex flex-row mt-2">
            <div className="flex flex-col text-black text-md font-sans ml-10 mt-5  font-extrabold">
              <label htmlFor="fname">Name:</label>
              <input
                className="w-96 rounded-xl py-4  caret-black focus:caret-red-500"
                type="text"
                id="fname"
                name="fname"
              />
            </div>

            <div className="flex justify-center md:mt-8 md:ml-40">
              <div className="mb-3 w-80">
                <label htmlFor="FileLg">Image:</label>
                <input
                  className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded-full border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-xl font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-1.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:bg-white focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent"
                  id="FileLg"
                  type="file"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row mt-2">
            <div className="flex flex-col text-black text-md font-sans ml-10  font-extrabold">
              <label htmlFor="fname">DOB:</label>
              <input
                className="w-60 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="text"
                id="fname"
                name="fname"
              />
            </div>
            <div className="flex flex-col text-black text-md font-sans ml-10  font-extrabold">
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
            <div className="flex flex-col text-black text-md font-sans ml-10  font-extrabold mt-2">
              <label htmlFor="fname">Email:</label>

              <input
                className="w-96 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="text"
                id="fname"
                name="fname"
              />
            </div>
            <div className="flex flex-col text-black text-md font-sans ml-10  font-extrabold">
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
            <div className="flex flex-col text-black text-md font-sans ml-10  font-extrabold">
              <label htmlFor="fname">Linked In:</label>
              <input
                className="w-96 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="text"
                id="fname"
                name="fname"
              />
            </div>
            <div className="flex flex-col text-black text-md font-sans ml-10  font-extrabold">
              <label htmlFor="fname">Indeed:</label>
              <input
                className="w-96 rounded-xl mt-4 py-4 caret-black focus:caret-red-500"
                type="tel"
                id="fname"
                name="fname"
              />
            </div>
          </div>

          <div className="flex flex-col text-black text-md font-sans ml-10  font-extrabold">
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
            <div className="flex flex-col text-black text-md font-sans ml-10  font-extrabold">
              <label htmlFor="fname">GitHub:</label>
              <input
                className="w-96 rounded-xl mt-4 py-4  caret-black focus:caret-red-500 "
                type="text"
                id="fname"
                name="fname"
              />
            </div>
            <div className="flex flex-col text-black text-md font-sans ml-10  font-extrabold">
              <label htmlFor="fname">Hacker Rank:</label>
              <input
                className="w-96 rounded-xl mt-4 py-4 caret-black focus:caret-red-500"
                type="tel"
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

export default AddDetails;
