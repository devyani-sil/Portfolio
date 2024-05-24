import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-scroll";
import DownScroll from "./motion/DownScroll";
const Hero = () => {
  return (
    <section
      id = "hero"
      name="hero"
      className=" text-white h-screen bg-hero-pattern  bg-cover bg-center"
    >
      <Navbar />
      <div className="h-2/3 flex justify-center items-center md:pt-20">
        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-9xl sm:text-7xl mt-40 md:mt-0 font-bold tracking-widest">
            Mirth Pawar
          </h1>
          <p className="text-lg md:text-2xl font-medium tracking-wider">
            Web Developer
          </p>
        </div>
      </div>
      <div className="absoulte xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <Link to="expertise" smooth duration={500}>
          <div className="w-[34px] h-[60px] rounded-3xl border-2 mt-10 md:mt-0 border-gray-300 flex justify-center items-start p-2 hover:cursor-pointer">
            <DownScroll />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
