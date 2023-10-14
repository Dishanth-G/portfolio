import React, { useState } from "react";
import { data } from "../data/data.js";
import MyModal from "./MyModal.jsx";

const Project = () => {
  // projects file
  const project = data;
  //setProject(data);

  const [openModals, setOpenModals] = useState(Array(project.length).fill(false));

  const openModal = (index) => {
    const newOpenModals = [...openModals];
    newOpenModals[index] = true;
    setOpenModals(newOpenModals);
  };

  const closeModal = (index) => {
    const newOpenModals = [...openModals];
    newOpenModals[index] = false;
    setOpenModals(newOpenModals);
  };
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Project
          </p>
          <p className="py-6">Check out some of my recent works and open source contributions</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-5">
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.thumbImg})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
          flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {item.github &&<a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                   bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>}
                  <button
                    onClick={() => openModal(index)}
                    className="text-center rounded-lg px-4 py-3 m-2
                   bg-white text-gray-700 font-bold text-lg"
                  >
                    About
                  </button>
                  <MyModal
                    isOpen={openModals[index]}
                    closeModal={() => closeModal(index)}
                    data={item}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xl pt-8">And many more...</p>
      </div>
    </div>
  );
};

export default Project;
