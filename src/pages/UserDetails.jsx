import React from "react";
import Image from "next/image";
import { FaAward } from "react-icons/fa";
import { SiLinkedin, SiGithub, SiHackerrank } from "react-icons/si";

const UserDetails = ({ user }) => {
  const {
    name,
    email,
    phone,
    dob,
    image,
    awards,
    linkedIn,
    certifications,
    gitHub,
    hackerRank,
    skills,
    education,
    languages_known,
    references,
    projects,
  } = user;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-md w-full space-y-8">
        <div className="relative w-full h-64">
          {/* <Image
            className="rounded-full"
            src={image}
            width={200}
            height={200}
            alt=""
          /> */}
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-600">{email}</p>
          <p className="text-gray-600">{phone}</p>
          <p className="text-gray-600">{dob}</p>
        </div>
        {awards && (
          <div className="text-center">
            <FaAward className="inline-block mr-2 text-2xl text-yellow-400" />
            <span className="text-gray-600">{awards}</span>
          </div>
        )}
        <div className="text-center">
          {linkedIn && (
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mx-2 text-gray-600 hover:text-blue-500"
            >
              <SiLinkedin className="inline-block mr-1 text-2xl" />
              <span>LinkedIn</span>
            </a>
          )}
          {certifications && (
            <a
              href={certifications}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mx-2 text-gray-600 hover:text-blue-500"
            >
              <span>Certifications</span>
            </a>
          )}
          {gitHub && (
            <a
              href={gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mx-2 text-gray-600 hover:text-blue-500"
            >
              <SiGithub className="inline-block mr-1 text-2xl" />
              <span>GitHub</span>
            </a>
          )}
          {hackerRank && (
            <a
              href={hackerRank}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mx-2 text-gray-600 hover:text-blue-500"
            >
              <SiHackerrank className="inline-block mr-1 text-2xl" />
              <span>HackerRank</span>
            </a>
          )}
        </div>
        <div>
          <h3 className="text-xl font-bold">Skills</h3>
          <ul>
            {Object.values(skills).map((skill, index) => (
              <li key={index} className="text-gray-600">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">Education</h2>
          <div>
            <h3 className="text-md font-bold">Primary</h3>
            <p>{education.Primary.Institution_name}</p>
            <p>{education.Primary.Year_of_pass}</p>
            <p>{education.Primary.Score}</p>
          </div>
          <div>
            <h3 className="text-md font-bold">Higher</h3>
            <p>{education.Higher.Institution_name}</p>
            <p>{education.Higher.Year_of_pass}</p>
            <p>{education.Higher.Score}</p>
          </div>
          <div>
            <h3 className="text-md font-bold">UG</h3>
            <p>{education.UG.Institution_name}</p>
            <p>{education.UG.Year_of_pass}</p>
            <p>{education.UG.Score}</p>
          </div>
          <div>
            <h3 className="text-md font-bold">PG</h3>
            <p>{education.PG.Institution_name}</p>
            <p>{education.PG.Year_of_pass}</p>
            <p>{education.PG.Score}</p>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold">Languages Known</h2>
          <ul className="list-disc list-inside">
            {Object.values(languages_known).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
