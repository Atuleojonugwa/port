import React from "react";
// import './App.css';

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className=" flex flex-col overflow-hidden relative cursor-pointer p-[15px]
        before:content-[''] before:absolute before:inset-0 
        before:border before:border-transparent before:rounded-xl 
        before:pointer-events-none before:opacity-0 
        hover:before:opacity-100 hover:before:animate-border-roll
    ">
      <img
        src={image}
        alt={title}
        className="  rounded-lg w-full  hover:scale-105 transition duration-300 ease-in-out
        
        "
      />
      <div className="text-[#f8fafc]">
        <h2 className="text-xl mt-5 mb-5">{title}</h2>
        <p className="text-[#94a3b8] text-[16px]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
