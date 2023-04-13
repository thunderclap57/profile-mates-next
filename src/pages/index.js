import Head from "next/head";

import { Inter } from "@next/font/google";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import ResumeComponent from "./ResumeComponent";
import TemplateComponent from "./TemplateComponent";
import PortFolioMaker from "./PortFolioMaker";
import HowTo from "./HowTo";
import Facts from "./Facts";
import Footer from "./Footer";
import SplashScreen from "./SplashScreen";
import { useEffect, useState } from "react";
import UserDetails from "./UserDetails";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showComponent, setShowComponent] = useState(true);
  useEffect(() => {
    let timer;
    if (showComponent) {
      timer = setTimeout(() => {
        setShowComponent(false);
      }, 3000); // change the value (in milliseconds) to adjust the time
    }
    return () => clearTimeout(timer);
  }, [showComponent]);

  return (
    <>
      <Head>
        <title>PROFILE MATE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/128/3135/3135731.png"
        />
      </Head>
      {showComponent ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />

          <Hero />
          <SecondComponent />
          <ThirdComponent />
          <ResumeComponent />
          <TemplateComponent />
          <PortFolioMaker />
          <HowTo />
          <Facts />
          <Footer />
          <UserDetails
            user={{
              userId: "12345",
              name: "John Doe",
              email: "johndoe@example.com",
              phone: 1234567890,
              dob: "01/01/1990",
              image: "https://randomuser.me/api/portraits/men/1.jpg",
              awards: "Best Employee of the Month",
              linkedIn: "https://www.linkedin.com/in/johndoe/",
              certifications: "Certified Scrum Master",
              gitHub: "https://github.com/johndoe",
              hackerRank: "https://www.hackerrank.com/johndoe",
              skills: {
                skill1: "JavaScript",
                skill2: "React",
                skill3: "Node.js",
                skill4: "HTML",
                skill5: "CSS",
                skill6: "MongoDB",
              },
              education: {
                Primary: {
                  Institution_name: "St. Mary's High School",
                  Year_of_pass: "2008",
                  Score: "90%",
                },
                Higher: {
                  Institution_name: "St. Xavier's College",
                  Year_of_pass: "2010",
                  Score: "85%",
                },
                UG: {
                  Institution_name: "University of Mumbai",
                  Year_of_pass: "2013",
                  Score: "80%",
                },
                PG: {
                  Institution_name: "University of Pune",
                  Year_of_pass: "2015",
                  Score: "75%",
                },
              },
              languages_known: {
                language1: "Englisssssssssh",
                language2: "Hindi",
                language3: "Spanish",
                language4: "French",
              },
              references: [
                {
                  name: "Jane Smith",
                  contact: "+1-123-456-7890",
                },
                {
                  name: "Bob Johnson",
                  contact: "+1-987-654-3210",
                },
              ],
              projects: [
                {
                  name: "E-commerce Website",
                  image: "https://via.placeholder.com/150",
                },
                {
                  name: "Social Media App",
                  image: "https://via.placeholder.com/150",
                },
              ],
            }}
          />
        </>
      )}
    </>
  );
}
