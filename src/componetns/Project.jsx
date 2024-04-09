import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { projects } from "../assets/data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./project.css";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
const Project = () => {
  const { projectId } = useParams();
  const [nextProject, setNextProject] = useState(null);
  const [prevId, setPrevId] = useState(null);
  const project = projects.find((item) => item.id === Number(projectId));

  useEffect(() => {
    // Scroll to the top when the component mounts
    const setproject = () => {
      let currid = project.id;
      if (currid === projects.length) {
        setNextProject(projects[0]);
      } else {
        setNextProject(projects[currid]);
      }
    };

    const setPrev = () => {
      let currid = project.id;
      if (currid === 1) {
        setPrevId(projects.length);
      } else {
        setPrevId(currid - 1);
      }
    };
    console.log(projectId);
    setproject();
    setPrev();
    window.scrollTo(0, 0);
  }, projectId);

  const [hovered, setHovered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className=" bg-[#1A191D]  text-white relative ">
      <Navbar />

      <Link to="/">
        {" "}
        <div className="fixed top-[15%] left-[3%] bg-[#201F23] rounded-full p-4 hidden md:flex items-center hover:text-[#66D9ED]   font-bold hover:border-[1px] hover:border-[#66D9ED]">
          <GoArrowLeft size={20} />
        </div>
      </Link>

      <div
        className=" hidden md:flex md:flex-col fixed bottom-10 right-6 rounded-lg bg-white "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {nextProject && isHovered && (
          <div className="w-[200px] ">
            <img src={nextProject.src} />
          </div>
        )}
        <div className="text-black flex items-center p-4 w-[200px]">
          <div>
            <div className="flex items-center gap-2 font-semibold ">
              <p>Next Project</p>
              <div className="hover:text-[#66D9ED]  transition-all duration-200 cursor-pointer">
                {prevId && (
                  <Link to={`/project/${prevId}`}>
                    <GoArrowLeft size={20} />
                  </Link>
                )}
              </div>
              <div className="hover:text-[#66D9ED]  transition-all duration-200 cursor-pointer">
                {nextProject && (
                  <Link to={`/project/${nextProject.id}`}>
                    <GoArrowRight size={20} />
                  </Link>
                )}
              </div>
            </div>
            {nextProject && (
              // Render the content that depends on nextProject
              <div className="">
                <p className="font-bold tracking-wider text-lg">{nextProject.text}</p>
                {/* Other content */}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="ml-auto mr-auto pt-10 px-6 md:ml-40">
        <div>
          <p className=" opacity-80">Web Development</p>
          <p className="text-4xl mt-1 font-bold break-words">{project.text}</p>
        </div>

        <div className="flex gap-1 items-center mt-20 font-semibold">
          <Link to="/">
            <p className="hover:text-[#66D9ED] hover:opacity-100 opacity-80 transition-all duration-200">
              Home
            </p>
          </Link>
          <div className="opacity-80">
            <MdKeyboardArrowRight size={20} />
          </div>
          <Link to={`/project/${project.id}`}>
            <p className="hover:text-[#66D9ED] hover:opacity-100 opacity-80 transition-all duration-200">
              Projects
            </p>
          </Link>
          <div className="opacity-80">
            <MdKeyboardArrowRight size={20} />
          </div>
          <p className="opacity-80">{project.text}</p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap w-[100%] lg:w-[750px] gap-10 md:gap-20 mt-10 items-center">
          <div className="opacity-60">
            <p>{project.desc}</p>
          </div>
          <div className="border-t-[1px] md:px-4 border-opacity-60 border-white">
            <p className="font-bold mt-2">Tecnologies</p>

            <p className="opacity-80  text-[15px] break-words">
              {project.tech}
            </p>
          </div>
        </div>
        <div className="flex items-center mt-10 md:mt-0 gap-1 font-bold hover:text-[#66D9ED] transition-all duration-200">
          <a href={project.link} target="_blank">
            <button
              className=""
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Open Project
            </button>
          </a>
          <MdOutlineKeyboardDoubleArrowRight
            size={22}
            style={
              hovered ? { animation: "moveRightLeft 0.6s ease infinite" } : {}
            }
          />
        </div>

        <div className="flex flex-col gap-2  mt-20 pb-4 justify-center">
          <img
            src={project.src}
            className="md:w-[90%] mr-auto ml-auto md:mr-0 md:ml-0 "
          />

          <img
            src={project.img2}
            className="md:w-[90%] mr-auto ml-auto md:mr-0 md:ml-0 "
          />

          <img
            src={project.img3}
            className="md:w-[90%] mr-auto ml-auto md:mr-0 md:ml-0 "
          />

          <img
            src={project.img4}
            className="md:w-[90%] mr-auto ml-auto md:mr-0 md:ml-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
