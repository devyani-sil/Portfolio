import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { useParams } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  const { projectId } = useParams();
  const [navBg, setNavBg] = useState("black");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleColor = () => {
      if (projectId) {
        setNavBg("#1A191D");
      } else setNavBg("black");
    };
    handleColor();
    
    const handScroll = () => {
      const isScrooled = window.scrollY > 600;
      setScrolled(isScrooled);
    };

    window.addEventListener("scroll", handScroll);
    return () => window.removeEventListener("scroll", handScroll);
  });

  const [selected, setSelected] = useState(null);
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      tag: "home",
      link: "hero",
    },
    {
      id: 2,
      tag: "expertise",
      link: "expertise",
    },
    {
      id: 3,
      tag: "work",
      link: "work",
    },
    {
      id: 4,
      tag: "contact",
      link: "contact",
    },
  ];
  console.log(nav);
  return (
    <div className="realtive">
      <div
        className={`w-[100%] flex  items-center  text-white px-6 py-4 md:static fixed z-50 `}
        style={{ backgroundColor: navBg }}
      >
        <h1 className="text-3xl md:text-5xl  font-bold font-signature ">
          Mirth._
        </h1>

        <nav className="hidden md:flex  items-center mr-auto ml-auto ">
          <ul className="hidden md:flex text-lg font-medium text-white">
            {links.map((link) => {
              return (
                <li
                  key={link.id}
                  className={`mr-10 cursor-pointer text-white ${
                    selected && selected !== link.id
                      ? "  opacity-50"
                      : "opacity-100"
                  } hover:scale-105   duration-200`}
                  onMouseEnter={() => setSelected(link.id)}
                  onMouseLeave={() => setSelected(null)}
                >
                  <HashLink to={`/#${link.link}`} smooth duration={500}>
                    // {link.tag}
                  </HashLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          onClick={() => setNav(!nav)}
          className="md:hidden cursor-pointer pr-4 z-20 ml-auto "
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {
          <ul
            className={`md:hidden transition-all ease-in-out duration-300 ${
              nav ? "w-full" : "w-0"
            }   flex flex-col justify-center 
            items-center absolute  top-0 left-0  h-screen bg-gradient-to-b from-black  to-gray-700
            z-10`}
          >
            {nav &&
              links.map((link) => {
                return (
                  <li key={link.id} className=" cursor-pointer py-3 text-3xl ">
                    <HashLink
                      to={`/#${link.link}`}
                      onClick={() => setNav(!nav)}
                      smooth
                      duration={500}
                    >
                      // {link.tag}
                    </HashLink>
                  </li>
                );
              })}
          </ul>
        }
      </div>

      {scrolled && (
        <div className="hidden md:flex bg-black  bg-opacity-60   w-[100%]  items-center  text-white p-4  fixed z-50 top-0 ">
          <nav className="hidden md:flex  items-center mr-auto ml-auto ">
            <ul className="hidden md:flex text-lg font-medium text-white">
              {links.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`mr-10 cursor-pointer text-[#66D9ED] ${
                      selected && selected !== link.id
                        ? " opacity-50"
                        : "opacity-100"
                    } hover:scale-105   duration-200`}
                    onMouseEnter={() => setSelected(link.id)}
                    onMouseLeave={() => setSelected(null)}
                  >
                    <HashLink to={`/#${link.link}`} smooth duration={500}>
                      // {link.tag}
                    </HashLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
