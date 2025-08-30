import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCode, faEnvelope, faPhone, faLocationDot, faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
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
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ge8ogom",
        "template_mfx9h47",
        form.current,
        "dy3zsVEJoC-lV8gTZ"
      )
      .then(
        (result) => {
          console.log("Message Sent:", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Message failed to send.");
        }
      );
  }
  
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
    { id: 5, iconClass: "devicon-react-original colored", name: "React"}
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
    <div className="m-0 p-0 box-border scroll-smooth">
      <nav className="my-0 mx-2.5 flex items-center justify-between border-b border-blue-500 p-5 
        sm:mx-5 sm:my-0 lg:px-5 lg:py-6 xl:px-10 2xl:w-[1440px] 2xl:mx-auto 2xl:my-0 2xl:px-10
      ">
        <FontAwesomeIcon className="text-[#f8fafc] text-[28px]" icon={faCode} />
        <button className="appearance-none cursor-pointer sm:hidden lg:hidden md:hidden xl:hidden" onClick={() => setOpen(!open)}  style={{ listStyle: "none" }}><FontAwesomeIcon className="text-white text-[20px] " icon={open ? faTimes : faBars}/></button>
        <ul className=" items-center gap-[5px] hidden sm:gap-2.5 sm:flex ">
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
      
      <div className="block sm:hidden lg:hidden md:hidden xl:hidden ">
          { open && ( <ul className="flex flex-col bg-[#0f172a] shadow-[0_4px_6px_-1px_#3b82f6] z-1 p-2.5 gap-[5px] w-full items-center transition-all duration-500   ">
                <li className="list-none">
                  <a onClick={() => setOpen(false)} className="decoration-0 text-[#f8fafc] text-[12px] hover:text-sky-400 transition ease-in-out duration-500 py-[5px] " href="#home">
                    Home
                  </a>
                </li>
                <li className="list-none">
                  <a
                    onClick={() => setOpen(false)} className="decoration-0 text-[#f8fafc] text-[12px] hover:text-sky-400 transition ease-in-out duration-500 py-[5px] "
                    href="#about"
                  >
                    About me
                  </a>
                </li>
                <li className="list-none">
                  <a
                    onClick={() => setOpen(false)} className="decoration-0 text-[#f8fafc] text-[12px] hover:text-sky-400 transition ease-in-out duration-500 py-[5px] "
                    href="#skills"
                  >
                    Skills
                  </a>
                </li>
                <li className="list-none">
                  <a
                    onClick={() => setOpen(false)} className="decoration-0 text-[#f8fafc] text-[12px] hover:text-sky-400 transition ease-in-out duration-500 py-[5px] "
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            )}
          </div>


      <section
        id="home"
        className=" {`${open ? 'mt-[96px]' : 'mt-[20px]'}  text-[#f8fafc] flex flex-col justify-between mt-[20px] mx-[20px] mb-[50px] sm:mt-10 sm:mx-10 sm:mb-[50px] sm:flex-col sm:items-center
        lg:flex-row lg:items-center lg:justify-between lg:mx-10 lg:mt-10 lg:mb-[80px] xl:mx-10 xl:gap-20 2xl:w-[1440px] 2xl:mx-auto 2xl:my-0 2xl:px-10 scroll-mt-[80px]}
        " 
        data-aos="fade-up"
      >
        <div className="flex flex-col mt-[30px] sm:items-center sm:mt-[60px] lg:items-start">
          <h1 className="text-[30px] font-semibold mb-2.5 sm:text-[52px] sm:mb-5 lg:text-[52px] xl:text-[72px]">
            Hi, I'm <span className="text-[#3b82f6] font-semibold"> Atule</span>
            .
          </h1>
          <p className="text-[22px] font-medium mb-5 text-[#3b82f6] sm:text-[16px]">
            FrontEnd Developer
          </p>
          <h3 className="mb-5 text-[16px]  font-medium">
            I am a passionate web developer focused on creating responsive,{" "}
            <br /> user-friendly, and modern web applications.I enjoy turning
            ideas <br /> into functional solutions and constantly improving my
            craft to <br /> deliver clean and efficient results.
          </h3>
          <div className="flex flex-row gap-5 sm:flex-row sm:items-center">
            <button className="py-[5px] px-2.5 text-[#f8fafc] border-0 rounded-[25px] w-[150px] text-[12px] cursor-pointer bg-[#1e293b] hover:bg-[#3b82f6] hover:scale-105 transition duration-300 ease-in-out
            sm:py-2.5 sm:px-5 sm:w-[200px]  sm:text-[16px]
            ">
              Download CV
            </button>
            <a
              className="decoration-0 w-[150px] text-center rounded-[25px] text-[#f8fafa] text-[12px] font-semibold py-[5px] px-2.5 bg-[#3b82f6] hover:bg-[#1e293b] hover:scale-105 transition duration-300 ease-in-out
              sm:py-2.5 sm:px-5 sm:w-[200px] sm:text-[16px]
              "
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="w-full  sm:w-[40%]  lg:w-[40%] xl:w-[40%] ">
          <img
            className="w-full h-[320px] object-cover rounded-[25px] self-end mt-7 sm:mt-14 lg:h-[320px] xl:h-[320px]"
            src={pic}
            alt=""
          />
        </div>
      </section>

      <section
        id="about"
        className=" mt-[20px] mx-[20px] mb-[50px] bg-[#1e293b] rounded-[12px] text-center shadow-[0_8px_20px_#3b82f6] px-2.5 py-[15px] 
        sm:mt-10 sm:mx-10 sm:mb-[50px] sm:px-5 sm:py-[30px]  lg:mx-10 lg:py-[50px] xl:mx-10 xl:px-10 2xl:w-[1440px] 2xl:mx-auto 2xl:my-0 2xl:px-10 2xl:mt-[50px]"
        data-aos="fade-up"
      >
        <h1 className="text-center text-[#f8fafc] w-full mb-2.5 text-[20px] font-bold sm:text-[36px] sm:mb-5 lg:text-[36px] xl:text-[36px] ">
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

      <section className=" mt-[20px] mx-[20px] mb-[50px] text-[#f8fafc] sm:mt-10 sm:mx-10 sm:mb-[50px] sm:px-5 sm:py-[30px] lg:mx-10 lg:p-2.5 xl:mx-32 2xl:w-[1440px] 2xl:mx-auto 2xl:my-0 2xl:px-10 2xl:mt-[50px]" id="skills" data-aos="fade-up">
        <h1 className="text-center text-[#f8fafc] mb-2.5 text-[20px] font-bold sm:text-[36px] sm:mb-5 lg:text-[36px] xl:text-[36px] ">Skills</h1>
        <div className="grid grid-cols-2 sm:grid gap-5 p-2.5 sm:p-0 sm:grid-cols-3 sm:gap-1.5 lg:grid-cols-5 lg:gap-5 xl:grid-cols-5 xl:gap-10">
          {skills.map((skill) => (
            < SkillCard
              key={skill.id}
              iconclass={skill.iconClass}
              name={skill.name}
            />
          ))}
        </div>
      </section>


      <section className="mt-[20px] mx-[20px] mb-[50px]  sm:mt-10 sm:mx-10 sm:p-5 sm:mb-[50px] lg:mx-10 xl:mx-10 2xl:w-[1440px] 2xl:mx-auto 2xl:my-0 2xl:px-10 2xl:mt-[50px]" id="projects" data-aos="fade-up" >
        <h1 className="text-center text-[#f8fafc] font-bold transition duration-300 ease-in-out text-[20px] sm:text-4xl lg:text-[36px] xl:text-[36px] ">Projects</h1>
        <div className =" flex-col w-full gap-5  lg:grid lg:grid-cols-3   sm:p-5 sm:gap-5 lg:gap-5 xl:grid-cols-3 xl:gap-10">
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

      <section className="bg-[#1e293b] p-3 text-center text-[#f8fafc]  sm:p-5 sm:w-full lg:px-20 lg:py-10 xl:px-10 2xl:w-[1440px] 2xl:mx-auto 2xl:my-0 2xl:px-10 2xl:mt-[50px]" id="contact" data-aos="fade-up">
        <h1 className="mb-2.5 text-[20px] font-bold md:text-[36px] lg:text-[36px] xl:text-[36px]">Contact Me</h1>
        <div className="flex w-full md:w-[600px] my-0 mx-auto flex-col lg:w-[800px] xl:w-[800px]">
          <h2 className="text-[16px]">If you’d like to collaborate or have any questions, feel free to reach out!</h2>
          <div className="flex flex-col justify-between mt-2.5 sm:items-center sm:flex-row sm:justify-between ">
            <p className="flex items-center gap-2.5 text-[#475569] text-[12px] sm:text-[16px]"><FontAwesomeIcon className="text-[#2563eb]" icon={faEnvelope} />ojonugwaatule@gmail.com</p>
            <p className="flex items-center gap-2.5 text-[#475569] text-[12px] sm:text-[16px]"><FontAwesomeIcon className="text-[#2563eb]" icon={faPhone} /> +234 70 8133 0495</p>
            <p className="flex items-center gap-2.5 text-[#475569] text-[12px] sm:text-[16px]"><FontAwesomeIcon className="text-[#2563eb]" icon={faLocationDot} /> Abuja, Nigeria</p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex  justify-center my-5 mx-auto flex-col gap-5 max-w-[800px] sm:my-2.5">
          <div className="flex   gap-5 items-center justify-center">
            <input type="text" name="user_name" className="w-full border-0 border-b-2 border-b-[#2563eb] text-[15px] pb-2.5 text-[#94a3b8] bg-transparent focus:outline-none placeholder:text-[#94a3b8] sm:p-5" placeholder="Name" required />
            <input type="email" name="user_email" className="w-full border-0 border-b-2 border-b-[#2563eb] text-[15px] pb-2.5 text-[#94a3b8] bg-transparent focus:outline-none placeholder:text-[#94a3b8] sm:p-5 " placeholder="Email" required />
          </div>
          <textarea name="message" placeholder="Message" rows="5" className="w-full bg-transparent border-0 border-b-2 border-b-[#2563eb] text-[15px] pb-2.5 text-[#94a3b8] focus:outline-none placeholder:text-[#94a3b8] sm:p-5" required></textarea>
          <button type="submit" className="text-[#f8fafc] cursor-pointer p-2 bg-transparent rounded-[30px] w-[150px] border border-[#2563eb] self-end  text-[15px] hover:bg-[#2563eb]  transition ease-in-out duration-300 sm:p-2.5
          lg:w-[200px] lg:text-[18px] xl:w-[220px]
          " >Send Message</button>
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
