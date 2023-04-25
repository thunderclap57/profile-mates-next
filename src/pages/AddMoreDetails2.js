import React, { useState } from "react";


const AddMoreDetails2 = (props) => {
  const [isDone, setdone] = useState(false);
  // const [inputFields, setInputFields] = useState([{ name: ""}]);
  const [indexx, setIndex] = useState(0);
  // const addFields = () => {
  //   let newField = { name : ""};

  //   setInputFields([...inputFields, newField]);
  //   setIndex((currindex) => currindex + 1);
  //   setFormData({ ...formData, projects:newField })
  // };
  
  // const removeInputFields = (index) => {
  //   const rows = [...inputFields];
  //   rows.splice(index, 1);
  //   setInputFields(rows);
  //   setIndex((currindex) => currindex - 1);
  // };
  const [projects, setprojects] = useState([{ name: '' }]);

  const handleAddProjects = () => {
    const newProjects = { name: '' };
    setprojects([...projects, newProjects]);
    setIndex((currindex) => currindex + 1);
  };

  const handleRemoveProjects = (index) => {
    const newprojects = [...projects];
    newprojects.splice(index, 1);
    setprojects(newprojects);
    setIndex((currindex) => currindex - 1);
  };

  const handleProjectsChange = (e, index) => {
    const { name, value } = e.target;
    const newprojects = [...projects];
    newprojects[index][name] = value;
    setprojects(newprojects);
    setFormData({ ...formData, projects:projects })
  };
 
 
  const [formData, setFormData] = useState(  {
    skills: {
    skill1: '',
    skill2: '',
    skill3: '',
    skill4: '',
    skill5: '',
    skill6: '',
  },projects:""});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const [skillLevel, field] = name.split(".");
  
    setFormData((prevState) => ({
      ...prevState,
      [skillLevel]: {
        ...prevState[skillLevel],
        [field]: value,
      },
    }));
  
  };
  const handleData = () => {

    props.onDataReceived(formData, true)
  };
  return (
    <div>
      
        <div className="flex flex-row ">
          <div className="flex flex-col pt-12 ">
            <div className="flex flex-row mt-2">
              <div className="flex text-black text-md font-sans ml-10   flex-col  font-extrabold">
                <div className="flex flex-col text-white text-md font-sans mt-5 font-extrabold">
                  <label htmlFor="fname">Skills:</label>
                  <div className="flex flex-row mt-2 gap-5">
                    <input
                      className="w-72 rounded-xl text-black py-4  caret-black focus:caret-red-500 "
                      type="text"
                      id="skills.skill1"
                      name="skills.skill1"
                      value={formData.skills.skill1}
                      onChange={handleInputChange}
                    />
                    <input
                      className="w-72 rounded-xl  py-4 text-black  caret-black focus:caret-red-500 "
                      type="text"
                      id="skills.skill2"
                      name="skills.skill2"
                      value={formData.skills.skill2}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-row mt-2 gap-5">
                    <input
                      className="w-72 rounded-xl  py-4 text-black  caret-black focus:caret-red-500 "
                      type="text"
                      id="skills.skill3"
                      name="skills.skill3"
                      value={formData.skills.skill3}
                      onChange={handleInputChange}
                    />
                    <input
                      className="w-72 rounded-xl  py-4 text-black  caret-black focus:caret-red-500 "
                      type="text"
                      id="skills.skill4"
                      name="skills.skill4"
                      value={formData.skills.skill4}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="flex flex-row mt-2 gap-5">
                    <input
                      className="w-72 rounded-xl  py-4 text-black caret-black focus:caret-red-500 "
                      type="text"
                      id="skills.skill5"
                      name="skills.skill5"
                      value={formData.skills.skill5}
                      onChange={handleInputChange}
                    />
                    <input
                      className="w-72 rounded-xl  py-4 text-black caret-black focus:caret-red-500 "
                      type="text"
                      id="skills.skill5"
                      name="skills.skill6"
                      value={formData.skills.skill6}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-10 text-white text-md font-sans   font-extrabold mt-4">
              <label htmlFor="fname">Projects:</label>
              <h1>*Mention your Projects</h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 justify-start items-start">
                  {projects.map((input, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row gap-4 justify-center items-center"
                      >
                        <input
                          className="w-72 rounded-xl mt-4 py-4 text-black caret-black focus:caret-red-500 "
                          type="text"
                          id="name"
                          name="name"
                          value={input.name}
                          onChange={(e) =>handleProjectsChange(e,index)}
                        />
                       
                      </div>
                    );
                  })}
                </div>
                <div className="flex-row ml-20">
                  {(indexx < 2 && isDone) && (
                    <button onClick={handleAddProjects}>
                      <a
                        href="#_"
                        className="inline-flex items-center w-full px-10 py-3 mt-10  text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
                      >
                        Add
                      </a>
                    </button>
                  )}
{indexx < 2  &&(
                  <button className="ml-10" onClick={handleRemoveProjects}>
                    <a
                      href="#_"
                      className="inline-flex items-center w-full px-10 py-3 mt-10  text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
                    >
                      Remove
                    </a>
                  </button>
)
}
                </div>
                {/* <div className="flex flex-row gap-4 justify-center items-center">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* {!isDone  ? (
          <button className="ml-10" onClick={handleData}>
            <a
              href="#_"
              className="inline-flex items-center ml-36 w-full px-10 py-3 mt-10  text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
            >
              Submit
            </a>
          </button>
        ) : (
          <p className="text-xl ml-10 text-white">
            Details Submitted move to next page...if you want to edit the
            details you can edit it later
          </p>
        )} */}
         <button onClick={handleData}>
            <a
              href="#_"
              className="inline-flex ml-96 -mt-20  items-center w-full px-10 py-3 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-black focus-within:bg-blue-700 focus-within:border-blue-700"
            >
              Submit
            </a>
          </button>
          <p className="text-white ml-96">Double Click to Submit</p>
      
    </div>
  );
};

export default AddMoreDetails2;
