import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import mongodb from "../assets/mongodb.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import node from "../assets/node.png";
import express from "../assets/express.png"

const Experience = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React JS",
      style: "shadow-blue-300",
    },
    {
      id: 5,
      src: node,
      title: "Node Js",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: express,
      title: "Express Js",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: mongodb,
      title: "Mongo DB",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: bootstrap,
      title: "BootStrap",
      style: "shadow-violet-500",
    },
    {
      id: 10,
      src: tailwind,
      title: "TailWind CSS",
      style: "shadow-blue-300",
    },
    
   
  ];

  return (
    <div
      name="skills"
      className="flex-wrap bg-gradient-to-b from-gray-800 to-black w-full min-h-150 md:h-screen pt-60"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills :
          </p>
          <p className="py-6">These are the Technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
