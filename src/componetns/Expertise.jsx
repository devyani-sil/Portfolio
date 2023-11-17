import React from "react";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTailwindCss,
} from "react-icons/bi";

import { expertisebg } from "../assets";

const Expertise = () => {
  return (
    <section
      name="expertise"
      className="md:h-screen bg-gradient-to-t  from-[#000000de] via-black to-[#000000f9] text-white"
    >
      <div className="mr-auto ml-auto  py-5 flex flex-col  justify-center items-center ">
        <h1 className=" text-6xl/10 mt-16 font-bold  tracking-wider">
          My Expertise
        </h1>

        <div className=" flex flex-col md:flex-row  items-center px-4 mt-10">
          <div className="sm:w-[80%] sm:mr-auto sm:ml-auto md:max-w-[400px] border-2 border-gray-400 p-4">
            <div className="flex justify-around items-center">
              <div className="drop-shadow-[0_5px_14px_#61dbfb]">
                <FaReact size={60} />
              </div>
              <h3 className="font-bold  text-2xl tracking-wide  ">
                <span className=""> Frontend Developer </span> <br /> React
              </h3>
            </div>

            <div className="mt-1 leading-7  font-medium  tracking-wide ">
              <div className="px-2 mt-4 ml-10 border-l-4 border-[#b7f]">
                <p className="p-2 ml-2 ">
                  Skilled in crafting dynamic web applications and interactive
                  user interfaces with React. Experienced in responsive design
                  and modern web development practices.
                </p>
              </div>
            </div>
          </div>

          <div className="sm:w-[80%] sm:mr-auto sm:ml-auto md:max-w-[400px]  flex flex-wrap items-center  justify-center border-2 border-gray-400 py-11 ">
            <div className="drop-shadow-[0_5px_14px_#e95d00]">
              <AiFillHtml5 size={90} />
            </div>
            <div className="drop-shadow-[0_5px_14px_#2C49D8]">
              <BiLogoCss3 size={90} />
            </div>
            <div className="drop-shadow-[0_5px_14px_#38bdf8]">
              <BiLogoTailwindCss size={90} />
            </div>
            <div className="drop-shadow-[0_5px_14px_#fbea5f]">
              <BiLogoJavascript size={90} />
            </div>
            <div className="drop-shadow-[0_5px_14px_#61dbfb]">
              <FaReact size={90} />
            </div>
            <div className="drop-shadow-[0_5px_14px]">
              <AiFillGithub size={90} />
            </div>
          </div>
        </div>
        <div className="max-w-[528px] opacity-[.2] drop-shadow-[0_5px_14px_#fbea5f] ">
          <img src={expertisebg} alt="bg" className="" />
        </div>
      </div>
    </section>
  );
};

export default Expertise;
