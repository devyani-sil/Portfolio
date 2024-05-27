import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Work.css";
import { projects } from "../assets/data";
const Work = () => {
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
      id="work"
      name="work"
      className="py-10 md:mt-0 text-white bg-gradient-to-t from-[#000000f9] via-black to-[#000000de]"
    >
      <div className="lg:max-w-[80%] lg:mr-auto lg:ml-auto  px-5 ">
        <motion.h1
          className="lg:text-8xl/tight md:text-7xl/tight  text-6xl/tight font-bold "
          initial={{
            y: 50,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        >
          My <br /> Work
        </motion.h1>
        <div className="grid sm:grid-cols-2  gap-8 px-12 sm:px-0 mt-6">
          {projects.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                className="shadow-md shadow-gray-800 bg-[#88888825] rounded-md"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden">
                  <Link
                    to={`/project/${item.id}`}
                    className="hover:cursor-pointer"
                  >
                    <img
                      src={item.src}
                      alt=""
                      className="duration-300 hover:scale-125"
                    />
                  </Link>
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
