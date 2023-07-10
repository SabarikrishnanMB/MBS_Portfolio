import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-24"
    >
      <div className="max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold ">
            Let's Get to Know About Me :
          </p>
        </div>

        <p className="text-xl text-gray-300 pb-3 mt-15">
          I seek to work in a competitive field and I am ready to accept challenges, utilizing my skills.
          I would like to work with an esteemed company that provides me a platform to use my expertise 
          and skills for the mutual growth and benefit of both the company and myself.
        </p>
        <p className="text-xl text-gray-300 pb-3 mt-2">
          I started my self-learning journey with online tutorials from Google, YouTube, etc.
          I then took a step further and enrolled in the GUVI IIT MADRAS Fullstack Development Program,
          which involved extensive programming and real-world projects. Later on, I learned the MERN Stack from Guvi 
          and built a website using HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.
        </p>
        <div className="pb-8">
          <p className="text-3xl font-bold mt-1">
            Education :                    
          </p>
          <p className="text-xl text-gray-300 pb-3 mt-4">
            St. Michael College of Engineering & Technology, Kalayarkoil		
             "B.Tech - IT" (Percentage 71.8) - 2014 <br/>
            Sourashtra Higher Secondary School, Paramakudi			          
            Higher Secondary School (Percentage 70)	- 2010 <br/>
            Sourashtra Higher Secondary School, Paramakudi 		           
            " SSLC " (Percentage 81.6) - 2008
            </p>
        </div>        
       
      </div>
    </div>
  );
};

export default About;
