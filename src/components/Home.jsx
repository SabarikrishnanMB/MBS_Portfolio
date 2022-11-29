import React from "react";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-400 text-xl py-4 max-w-full">
            I have completed my MERN stack development course in GUVI-IIT Madras and having
            hands-on experience in web application and creating Full Stack
            Projects and I, attend hackathons.
            <br/>
            Currently, I looking for a job from which i get trained technologies
            like HTML, CSS, Javascript, React Js, Node Js, Express Js and
            MongoDB.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
