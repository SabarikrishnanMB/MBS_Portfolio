import React from "react";
import Airbnb from "../assets/portfolio/AirbnbClone.jpg";
import CRM from "../assets/portfolio/CRM.jpg";
import Zoom from "../assets/portfolio/Zoom.jpg";
import { MdLaunch } from "react-icons/md";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Airbnb,
      name: "Airbnb Clone",
      link: "https://airbnb-front-end.netlify.app/",
      client: "https://github.com/SabarikrishnanMB/Airbnb-frontend",
      server: "https://github.com/SabarikrishnanMB/Airbnb-backend",
    },
    {
      id: 2,
      src: Zoom,
      name: "Zoom App",
      link: "https://zoomfrontend.netlify.app/",
      client: "https://github.com/SabarikrishnanMB/Zoom-Frontend",
      server: "https://github.com/SabarikrishnanMB/Zoom-Backend",
    },
    {
      id: 3,
      src: CRM,
      name: "CRM App",
      link: "https://crm-app-ui.netlify.app/",
      client: "	https://github.com/SabarikrishnanMB/crm_app",
      server: "https://github.com/SabarikrishnanMB/crm_nodejs",
    },  
    
    
  ];

  return (
    <div
      name="projects"
      className="h-250 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-250 pt-24"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold">
            Projects :
          </p>
          <p className="py-6 text-xl text-gray-300">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, link, client, server }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={client}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105 text-gray-300"
                >
                  <span>Client Code</span>
                </a>
                <a
                  href={server}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-105 text-gray-300"
                >
                  <span>Server Code</span>
                </a>
              </div>
              <a href={link} target="_blank" rel="noreferrer">
                <h4 className="group text-white mx-4 px-6 py-3 my-2 flex justify-center items-center rounded-md bg-gradient-to-r from-gray-500 to-gray-700 cursor-pointer duration-300 hover:scale-110">
                  {name}
                  <MdLaunch size={20} className="ml-1" />
                </h4>
              </a>
            </div>
          ))}
        </div>
      </div><br/><br/>
    </div>
  );
};

export default Portfolio;
