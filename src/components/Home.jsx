import React from "react";
import { MdLaunch } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen mx-auto w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-400 text-xl py-4 max-w-full">
            I have completed my MERN stack development course in GUVI-IIT Madras
            and having hands-on experience in web application and creating Full
            Stack Projects and I, attend hackathons.
            <br />
            Currently, I looking for a job from which i get trained technologies
            like HTML, CSS, Javascript, React Js, Node Js, Express Js and
            MongoDB.
          </p>
          <div className="flex flex-row">
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex  items-center rounded-md bg-gradient-to-r from-gray-500 to-gray-700 cursor-pointer hover:scale-110 duration-300"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <a
              className="group text-white w-fit px-6 py-3 my-2 ml-4 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-gray-700 cursor-pointer hover:scale-110 duration-300"
              href="https://drive.google.com/file/d/16dUyqod64PFCMI92-AT-VsdfaWjOTF32/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
              <span className="group-hover:rotate-0 duration-300">
                <MdLaunch size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
