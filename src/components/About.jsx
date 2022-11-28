import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-150 bg-gradient-to-b from-gray-800 to-black text-white pt-40"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Let's Get to Know About Me :
          </p>
        </div>

        <p className="text-xl pb-3 mt-15">
          I seek to work in a competitive field and ready to accept the
          challenges, utilizing my skills, would like to work with a highly
          esteemed company which gives me a platform to use my expertise and
          skills for mutual growth and benefit of company and myself.
        </p>
        <p className="text-xl pb-3 mt-2">
          I Started off my self-learning journey with online tutorials Google,
          YouTube, etc and took a step further and Enrolled in the GUVI IIT
          MADRAS Fullstack developer Program which involved extensive
          programming and real world projects. Later, I learned MERN Stack From
          Guvi and built an Website using HTML, CSS, Javascript, React Js, Node
          Js, Express Js, MongoDB.
        </p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
