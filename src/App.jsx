import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCode, faEnvelope, faPhone, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import pic from "./assets/pic.png";
import "devicon/devicon.min.css";
import project1 from "./assets/project.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  const skills = [
    { id:1, iconClass: "devicon-html5-plain colored", name: "HTML" },
    { id:2, iconClass: "devicon-css3-plain colored", name: "CSS" },
    { id:3, iconClass: "devicon-tailwindcss-original colored", name: "Tailwind CSS" },
    { id:4, iconClass: "devicon-javascript-plain colored", name: "JavaScript" },
    { id:5, iconClass: "devicon-react-original colored", name: "React" },
  ];
  
  const projects = [
    {
      id: 1,
      image: project1,
      title: "Whitespace Project",
      description:
        "A fully responsive website built with HTML, CSS, Python, and Django, ensuring seamless performance across all devices.",
    },
    {
      id: 2,
      image: project2,
      title: "Car Pack Login page",
      description:
        "A login page for a system that manages and allocates car park spaces, allowing users to securely sign in and reserve parking spots efficiently.",
    },
    {
      id: 3,
      image: project3,
      title: "Cloned Website",
      description: "A cloned landing page of sauce labs.",
      },
  ]


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
        data-aos="fade-up"
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
            <button className="py-2.5 px-5 text-[#f8fafc] border-0 rounded-[25px] w-[200px] text-[16px] cursor-pointer bg-[#1e293b] hover:bg-[#3b82f6] hover:scale-105 transition duration-300 ease-in-out">
              Download CV
            </button>
            <a
              className="decoration-0 w-[200px] text-center rounded-[25px] text-[#f8fafa] text-[16px] font-semibold py-2.5 px-5 bg-[#3b82f6] hover:bg-[#1e293b] hover:scale-105 transition duration-300 ease-in-out "
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="w-[40%]">
          <img
            className="w-full h-[320px] object-cover rounded-[25px] self-end mt-14"
            src={pic}
            alt=""
          />
        </div>
      </section>

      <section
        id="about"
        className=" mt-[40px] mx-[40px] mb-[100px] bg-[#1e293b] rounded-[12px] text-center shadow-[0_8px_20px_#3b82f6] px-5 py-[30px]"
        data-aos="fade-up"
      >
        <h1 className="text-center text-[#f8fafc] mb-5 text-[36px] font-bold">
          About Me
        </h1>
        <h3 className="text-[16px] font-normal text-[#f8fafc] my-0 mx-auto leading-[1.7]">
          I am a passionate web developer who loves coding and problem-solving.
          I enjoy building creative and efficient solutions that make an impact.
          My journey as a developer is still growing, and I am constantly
          learning new technologies to improve my skills and gain more
          experience every day.
        </h3>
      </section>

      <section className=" mt-[40px] mx-[40px] mb-[100px] text-[#f8fafc] py-[30px] px-5" id="skills" data-aos="fade-up">
        <h1 className="text-center text-[#f8fafc] mb-5 text-[36px] font-bold ">Skills</h1>
        <div className="grid grid-cols-5 gap-5 p-5 ">
          {skills.map((skill) => (
            < SkillCard
              key={skill.id}
              iconclass={skill.iconClass}
              name={skill.name}
            />
          ))}
        </div>
      </section>


      <section className="mt-[40px] mx-[40px] mb-[100px] p-5 " id="projects" data-aos="fade-up" >
        <h1 className="text-center text-[#f8fafc] font-bold transition duration-300 ease-in-out text-4xl ">Projects</h1>
        <div className  ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                />
              ))}
          </div>
        
      </section>

      <section className="bg-[#1e293b] p-5 text-center text-[#f8fafc]" id="contact" data-aos="fade-up">
        <h1 className="mb-2.5 text-[36px] font-bold">Contact Me</h1>
        <div className="flex w-[600px] my-0 mx-auto flex-col">
          <h2 className="text-[16px]">If you’d like to collaborate or have any questions, feel free to reach out!</h2>
          <div className="flex items-center justify-between mt-2.5">
            <p className="flex items-center gap-2.5 text-[#475569] text-[16px]"><FontAwesomeIcon className="text-[#2563eb]" icon={faEnvelope} />ojonugwaatule@gmail.com</p>
            <p className="flex items-center gap-2.5 text-[#475569] text-[16px]"><FontAwesomeIcon className="text-[#2563eb]" icon={faPhone} /> +234 70 8133 0495</p>
            <p className="flex items-center gap-2.5 text-[#475569] text-[16px]"><FontAwesomeIcon className="text-[#2563eb]" icon={faLocationDot} /> Abuja, Nigeria</p>
          </div>
        </div>

        <form className="flex justify-center my-5 mx-auto flex-col gap-5 max-w-[800px]">
          <div className="flex gap-5 items-center justify-center">
            <input type="text" className="w-full border-0 border-b-2 border-b-[#2563eb] text-[15px] pb-5 text-[#1e293b] bg-transparent focus:outline-none placeholder:text-[#94a3b8]" placeholder="Name" required />
            <input type="email" className="w-full border-0 border-b-2 border-b-[#2563eb] text-[15px] pb-5 text-[#1e293b] bg-transparent focus:outline-none placeholder:text-[#94a3b8]" placeholder="Email" required />
          </div>
          <textarea placeholder="Message" rows="5" className="w-full bg-transparent border-0 border-b-2 border-b-[#2563eb] text-[15px] pb-5 text-[#1e293b] focus:outline-none placeholder:text-[#94a3b8]" required></textarea>
          <button type="submit" className="text-[#f8fafc] cursor-pointer py-2.5 px-2.5 bg-transparent rounded-[30px] w-[150px] border border-[#2563eb] self-end  text-[15px] hover:bg-[#2563eb]  transition ease-in-out duration-300  " >Send Message</button>
        </form>

        <div className="flex items-center justify-center gap-5">
          <a href="https://github.com/Atuleojonugwa"  className="decoration-0 text-[#2563eb] text-[22px] transition-transform duration-300 ease-in-out hover:scale-110" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub}  />
          </a>
          <a href="https://www.linkedin.com/in/atule-ojonugwa-4b0b1a1b2/" className="decoration-0 text-[#2563eb] text-[22px] transition-transform duration-300 ease-in-out hover:scale-110"  target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin}  />
          </a>
          <a href="https://twitter.com/AtuleOjonugwa"  className="decoration-0 text-[#2563eb] text-[22px] transition-transform duration-300 ease-in-out hover:scale-110" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter}  />
          </a>
          <a href="https://www.instagram.com/atule_ojonugwa/" className="decoration-0 text-[#2563eb] text-[22px] transition-transform duration-300 ease-in-out hover:scale-110"  target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram}  />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
