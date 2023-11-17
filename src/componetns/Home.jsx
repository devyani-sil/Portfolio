import React from "react";
import Navbar from "./Navbar";
import Scroll from "./motion/scroll";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <section
      name="home"
      className=" text-white h-screen bg-hero-pattern  bg-cover bg-center"
    >
      <Navbar />
      <div className="h-2/3 flex justify-center items-center md:pt-20">
        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-9xl sm:text-7xl  font-bold tracking-widest">
            Mirth Pawar
          </h1>
          <p className="text-lg md:text-2xl font-medium tracking-wider">
            Front-end Developer
          </p>
        </div>
      </div>
      <div className="absoulte xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <Link to="expertise" smooth duration={500}>
          <div className="w-[34px] h-[60px] rounded-3xl border-2 border-gray-300 flex justify-center items-start p-2 hover:cursor-pointer">
            <Scroll />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Home;
