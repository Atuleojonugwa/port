import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import pic from "./assets/pic.png";
import "devicon/devicon.min.css";


function App() {
  return (
    <div className="m-0 p-0 box-border">
      <nav className="my-0 mx-5 flex items-center justify-between border-b border-blue-500 p-5 ">
        <FontAwesomeIcon className="text-[#f8fafc] text-[28px]" icon={faCode} />
        <ul className="flex items-center gap-2.5 ">
          <li className="list-none">
            <a className="decoration-0 text-[#f8fafc] text-[16px] hover:text-sky-400 transition ease-in-out duration-500 py-2.5 px-5" href="#home">
              Home
            </a>
          </li>
          <li className="list-none">
            <a
              className="decoration-0 text-[#f8fafc] text-[16px] hover:text-sky-400 transition ease-in-out duration-500 py-2.5 px-5"
              href="#about"
            >
              About me
            </a>
          </li>
          <li className="list-none">
            <a
              className="decoration-0 text-[#f8fafc] text-[16px] hover:text-sky-400 transition ease-in-out duration-500 py-2.5 px-5"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li className="list-none">
            <a
              className="decoration-0 text-[#f8fafc] text-[16px] hover:text-sky-400 transition ease-in-out duration-500 py-2.5 px-5"
              href="#projects"
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>

      <section
        id="home"
        className="text-[#f8fafc] h-full flex justify-between mt-[40px] mx-[40px] mb-[100px]"
      >
        <div className="flex flex-col mt-[60px]">
          <h1 className="text-[52px] font-semibold mb-5">
            Hi, I'm <span className="text-[#3b82f6] font-semibold"> Atule</span>
            .
          </h1>
          <p className="text-[22px] font-medium mb-5 text-[#3b82f6]">
            FrontEnd Developer
          </p>
          <h3 className="mb-5 text-[16px] font-medium">
            I am a passionate web developer focused on creating responsive,{" "}
            <br /> user-friendly, and modern web applications.I enjoy turning
            ideas <br /> into functional solutions and constantly improving my
            craft to <br /> deliver clean and efficient results.
          </h3>
          <div className="flex items-center gap-5">
            <button className="py-2.5 px-5 text-[#f8fafc] border-0 rounded-[25px] w-[200px] text-[16px] cursor-pointer bg-[#1e293b]">
              Download CV
            </button>
            <a
              className="decoration-0 w-[200px] text-center rounded-[25px] text-[#f8fafa] text-[16px] font-semibold py-2.5 px-5 bg-[#3b82f6] "
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="w-[40%]">
          <img
            className="w-full h-[320px] object-cover rounded-[25px] self-end"
            src={pic}
            alt=""
          />
        </div>
      </section>

      <section
        id="about"
        className=" mt-[40px] mx-[40px] mb-[100px] bg-[#1e293b] rounded-[12px] text-center shadow-[0_8px_20px_#3b82f6] px-5 py-[30px]"
      >
        <h1 className="text-center text-[#f8fafc] mb-5 text-[36px] font-bold">
          About Me
        </h1>
        <h3 className="text-[16px] font-normal text-[#f8fafc] my-0 mx-auto leading-[1.7]">
          {" "}
          I am a passionate web developer who loves coding and problem-solving.
          I enjoy building creative and efficient solutions that make an impact.
          My journey as a developer is still growing, and I am constantly
          learning new technologies to improve my skills and gain more
          experience every day.
        </h3>
      </section>

      <section className=" mt-[40px] mx-[40px] mb-[100px] text-[#f8fafc] py-[30px] px-5" id="skills">
        <h1 className="text-center text-[#f8fafc] mb-5 text-[36px] font-bold ">Skills</h1>
        <div className="grid grid-cols-5 gap-5 p-5 ">
          <div className="flex flex-col text-center cursor-pointer relative p-2.5 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105">
            <i className="devicon-html5-plain colored text-[80px] font-light "></i>
            <span className="mt-5 text-[16px]">HTML</span>
          </div>
          <div className="flex flex-col text-center cursor-pointer relative p-2.5 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105">
            <i className="devicon-css3-plain colored text-[80px] font-light "></i>
            <span className="mt-5 text-[16px]">CSS</span>
          </div>
          <div className="flex flex-col text-center cursor-pointer relative p-2.5 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105">
            <i className="devicon-tailwindcss-original colored text-[80px] font-light "></i>
            <span className="mt-5 text-[16px]">TAILWIND CSS</span>
          </div>
          <div className="flex flex-col text-center cursor-pointer relative p-2.5 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105">
            <i className="devicon-javascript-plain colored text-[80px] font-light"></i>
            <span className="mt-5 text-[16px]">JAVASCRIPT</span>
          </div>
          <div className="flex flex-col text-center cursor-pointer relative p-2.5 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105">
            <i className="devicon-react-original colored text-[80px] font-light"></i>
            <span className="mt-5 text-[16px]">REACT</span>
          </div>
        </div>
      </section>


      <section class="projects" id="projects" >
        <h1>Projects</h1>
        <div class="projcont">
            <div class="pro">
                <img src="./project.png" alt=""/>
                <div class="prowrt">
                    <h2>Whitespace Project</h2>
                    <p>A fully responsive website built with HTML, CSS, Python, and Django, ensuring seamless performance across all devices.</p>
                    
                </div>
            </div>
            <div class="pro">
                <img src="./project2.png" alt=""/>
                <div class="prowrt">
                <h2>Car Pack Login page</h2>
                <p>A login page for a system that manages and allocates car park spaces, allowing users to securely sign in and reserve parking spots efficiently.</p>
                
            </div>
            </div>

            <div class="pro">
                <img src="./project3.png" alt=""/>
                <div class="prowrt">
                <h2>Cloned Website</h2>
                <p>A cloned landing page of sauce labs.</p>
                
            </div>
            </div>
        </div>
    </section>

    </div>
  );
}

export default App;
