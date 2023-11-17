import React from "react";
import { useState } from "react";
import {
  makeoverbykeerti,
  memeexpress,
  myportfolio,
  quizzical,
  realpalace,
} from "../assets";

import "./Work.css";
const Work = () => {
  const projects = [
    {
      id: 1,
      text: "Real Palace ",
      type: "Frontend Development",
      src: realpalace,
      link: "http://realpalace.in/",
    },
    {
      id: 2,
      src: makeoverbykeerti,
      text: "Makeover by Keerti ",
      type: "Frontend Development",
      link: "https://makeoverbykeerti.in/",
    },
    {
      id: 3,
      src: quizzical,
      text: "Quizzical - A quiz app",
      type: "React Development",
      link: "https://github.com/Mirthhh08/QuizWhizz",
    },
    {
      id: 4,
      src: memeexpress,
      text: "MemeXpress",
      type: "React Development",
      link: "https://github.com/Mirthhh08/MemeXpress",
    },
    {
      id: 5,
      src: myportfolio,
      text: "Portfolio Site",
      type: "React Development",
      link: "https://my-portfolio-sigma-liart.vercel.app/",
    },
  ];

  const [hover, setHover] = useState(Array(projects.length).fill(false));

  const handleMouseEnter = (index) => {
    const updatedHover = [...hover];
    updatedHover[index] = true;
    setHover(updatedHover);
  };

  const handleMouseLeave = (index) => {
    const updatedHover = [...hover];
    updatedHover[index] = false;
    setHover(updatedHover);
  };

  return (
    <section
      name="work"
      className="py-10 text-white bg-gradient-to-t from-[#000000f9] via-black to-[#000000de]"
    >
      <div className="lg:max-w-[80%] lg:mr-auto lg:ml-auto  px-5 ">
        <h1 className="lg:text-8xl/tight md:text-7xl/tight  text-6xl/tight font-bold ">
          My <br /> Work
        </h1>
        <div className="grid sm:grid-cols-2  gap-8 px-12 sm:px-0 mt-6">
          {projects.map((item, index) => {
            return (
              <div
                key={item.id}
                className="shadow-md shadow-gray-800 bg-[#88888825] rounded-md"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="overflow-hidden">
                  <a
                    href={item.link}
                    className="hover:cursor-pointer"
                    target="_blank"
                  >
                    <img
                      src={item.src}
                      alt=""
                      className="duration-300 hover:scale-125"
                    />
                  </a>
                </div>
                <div className=" flex flex-col px-2 font-medium text-lg m-2 text-gray-500">
                  <h2 className="text-white">{item.text}</h2>
                  <div
                    className={`mb-2 text-sm font-bold transition duration-300 ease-in-out ${
                      hover[index]
                        ? "animate-slide-fade-in"
                        : "animate-slide-fade-out"
                    }`}
                  >
                    {hover[index] ? <a>Show Project </a> : item.type}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
