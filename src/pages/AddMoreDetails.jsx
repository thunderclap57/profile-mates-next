import React, { useState } from "react";


const AddMoreDetails = (props) => {
  const [isDone, setdone] = useState(false);
  const [reference, setReference] = useState([{ name: "", contact: "" }]);
  const [indexx, setIndex] = useState(0);
  const handleInputReferencesChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...reference];
    list[index][name] = value;
    setReference(list);
    console.log(reference);
  
  };

  const handleAddClick = () => {
    setReference([...reference, { name: "", contact: "" }]);
    setIndex((currindex) => currindex + 1);

  };

  const handleRemoveClick = (index) => {
    const list = [...reference];
    list.splice(index, 1);
    setReference(list);
    setIndex((currindex) => currindex - 1);
  };

  const [formData, setformData] = useState({
    Primary: {
      Institution_name: "",
      Year_of_pass: "",
      Score: "",
    },
    Higher: {
      Institution_name: "",
      Year_of_pass: "",
      Score: "",
    },
    UG: {
      Institution_name: "",
      Year_of_pass: "",
      Score: "",
    },
    PG: {
      Institution_name: "",
      Year_of_pass: "",
      Score: "",
    },
    languages_known: {
      language1: "",
      language2: "",
      language3: "",
      language4: "",
    },
     references: [
      {
        name: '',
        contact: '',
      },
    ],
  });
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post("/api/formData", formData)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const [eduLevel, field] = name.split(".");

    setformData((prevState) => ({
      ...prevState,
      [eduLevel]: {
        ...prevState[eduLevel],
        [field]: value,
      },
    }));

  };
  const handleLanguageChange = (event) => {
    const { name, value } = event.target;

    const [languagesKnown, field1] = name.split(".");

    setformData((prevState) => ({
      ...prevState,
      [languagesKnown]: {
        ...prevState[languagesKnown],
        [field1]: value,
      },
    }));
  };

  const handleData = () => {
    setformData({ ...formData, references: reference })
    props.onDataReceived(formData, true)
  };
  return (
    
      <div className="flex flex-row ">
        <div className="flex flex-col ">
          <div className="flex flex-row mt-2">
            <div className="flex text-white  text-md font-sans ml-5  flex-col  font-extrabold">
              <label htmlFor="fname " className="text-white">
                formData:
              </label>
              <label>
                Primary Institution Name:
                <input
                  className="w-40 text-black   rounded-xl py-1 ml-[15px] caret-black focus:caret-red-500 "
                  type="text"
                  name="Primary.Institution_name"
                  value={formData.Primary.Institution_name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Primary Year of Pass:
                <input
                  className="w-40 text-black   rounded-xl py-1 ml-[15px] caret-black focus:caret-red-500 "
                  type="text"
                  name="Primary.Year_of_pass"
                  value={formData.Primary.Year_of_pass}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Primary Score:
                <input
                  className="w-40 mt-4 text-black rounded-xl py-1 ml-[90px] caret-black focus:caret-red-500 "
                  type="text"
                  name="Primary.Score"
                  value={formData.Primary.Score}
                  onChange={handleInputChange}
                />
              </label>
              <label className="mt-10">
                Higher Institution Name:
                <input
                  className="w-40 text-black   rounded-xl py-1 ml-[15px] caret-black focus:caret-red-500 "
                  type="text"
                  name="Higher.Institution_name"
                  value={formData.Higher.Institution_name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Higher Year of Pass:
                <input
                  className="w-40 mt-4 text-black rounded-xl py-1 ml-[50px] caret-black focus:caret-red-500 "
                  type="text"
                  name="Higher.Year_of_pass"
                  value={formData.Higher.Year_of_pass}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Higher Score:
                <input
                  className="w-40 mt-4 text-black rounded-xl py-1 ml-[90px] caret-black focus:caret-red-500 "
                  type="text"
                  name="Higher.Score"
                  value={formData.Higher.Score}
                  onChange={handleInputChange}
                />
              </label>
              <label className="mt-10">
                UG Institution Name:
                <input
                  className="w-40 mt-4 text-black  rounded-xl py-1 ml-[50px] caret-black focus:caret-red-500 "
                  type="text"
                  name="UG.Institution_name"
                  value={formData.UG.Institution_name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                UG Year of Pass:
                <input
                  className="w-40 mt-4 text-black rounded-xl py-1 ml-[50px] caret-black focus:caret-red-500 "
                  type="text"
                  name="UG.Year_of_pass"
                  value={formData.UG.Year_of_pass}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                UG Score:
                <input
                  className="w-40 mt-4 text-black rounded-xl py-1 ml-[90px] caret-black focus:caret-red-500 "
                  type="text"
                  name="UG.Score"
                  value={formData.UG.Score}
                  onChange={handleInputChange}
                />
              </label>
              <label className="mt-10">
                PG Institution Name:
                <input
                  className="w-40 mt-4 text-black  rounded-xl py-1 ml-[50px] caret-black focus:caret-red-500 "
                  type="text"
                  name="PG.Institution_name"
                  value={formData.PG.Institution_name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                PG Year of Pass:
                <input
                  className="w-40 mt-4 text-black rounded-xl py-1 ml-[50px] caret-black focus:caret-red-500 "
                  type="text"
                  name="PG.Year_of_pass"
                  value={formData.PG.Year_of_pass}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                PG Score:
                <input
                  className="w-40 mt-4 text-black rounded-xl py-1 ml-[90px] caret-black focus:caret-red-500 "
                  type="text"
                  name="PG.Score"
                  value={formData.PG.Score}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="flex mt-5 flex-col ml-20 gap-4 font-extrabold">
              <label htmlFor="fname" className="text-white">
                Languages Known:
              </label>
              <input
                className="w-80 rounded-xl py-4  caret-black focus:caret-red-500"
                type="text"
                id="language1"
                name="languages_known.language1"
                value={formData.languages_known.language1}
                onChange={handleLanguageChange}
              />
              <input
                className="w-80 rounded-xl py-4  caret-black focus:caret-red-500"
                type="text"
                id="language2"
                name="languages_known.language2"
                value={formData.languages_known.language2}
                onChange={handleLanguageChange}
              />
              <input
                className="w-80 rounded-xl py-4  caret-black focus:caret-red-500"
                type="text"
                id="language3"
                name="languages_known.language3"
                value={formData.languages_known.language3}
                onChange={handleLanguageChange}
              />
              <input
                className="w-80 rounded-xl py-4  caret-black focus:caret-red-500"
                type="text"
                id="language4"
                name="languages_known.language4"
                value={formData.languages_known.language4}
                onChange={handleLanguageChange}
              />
              <div className="flex flex-col  text-white text-md font-sans   font-extrabold mt-5">
                <label htmlFor="fname">References:</label>
                {reference.map((input, index) => {
                  return (
                    <div key={index} className="mt-1">
                      <label>Name:</label>
                      <input
                        className="w-36 text-black rounded-xl py-2 ml-5 mr-5 caret-black focus:caret-red-500"
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={(event) =>
                          handleInputReferencesChange(event, index)
                        }
                        required
                      />

                      <label>Contact:</label>
                      <input
                        className="w-36 text-black rounded-xl py-2 ml-5 caret-black focus:caret-red-500"
                        type="text"
                        name="contact"
                        value={input.contact}
                        onChange={(event) =>
                          handleInputReferencesChange(event, index)
                        }
                        required
                      />
                    </div>
                  );
                })}
                <div className="flex-row ml-20">
                  {indexx < 3 && (
                    <button onClick={handleAddClick}>
                      <a
                        href="#_"
                        className="inline-flex items-center w-full px-10 py-3 mt-10  text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
                      >
                        Add
                      </a>
                    </button>
                  )}

                  <button className="ml-10" onClick={handleRemoveClick}>
                    <a
                      href="#_"
                      className="inline-flex items-center w-full px-10 py-3 mt-10 ml-16 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
                    >
                      Remove
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {!isDone && (
            <div>
              <button onClick={handleData}>
                <a
                  href="#_"
                  className="inline-flex ml-[610px] -mt-28  items-center w-full px-10 py-3 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-black focus-within:bg-blue-700 focus-within:border-blue-700"
                >
                  Submit
                </a>
              </button>
              <p className="text-white ml-[610px] -mt-8">Double Click to Submit</p>
            </div>
          ) }

        </div>
      </div>
    
  );
};

export default AddMoreDetails;
