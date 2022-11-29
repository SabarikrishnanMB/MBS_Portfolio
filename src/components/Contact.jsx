import React from "react";
import "../index.css";

const Contact = () => {
  return (
    <div
      name="contact"
      id="margins"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-60"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact :
          </p>
          <p className="py-5">Submit the form below to get in touch with me Otherwise</p>
          <p className="py-1">
            Send a E-Mail to: mbsabarikrishnan@gmail.com or Contact Me:
            +918778766057
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/3ef355b3-777e-40ec-8828-a75ecfdcf144"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              required
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-gray-500 to-gray-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
