import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
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
      link: "home",
    },
    {
      id: 2,
      link: "expertise",
    },
    {
      id: 3,
      link: "work",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  console.log(nav);
  return (
    <div>
      <div className="w-[100%] flex items-center bg-black text-white p-6 ">
        <h1 className="text-3xl md:text-5xl  font-bold font-signature">
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
                  <Link to={link.link} smooth duration={500}>
                    // {link.link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          onClick={() => setNav(!nav)}
          className="md:hidden cursor-pointer pr-4 z-20 ml-auto"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul
            className="md:hidden flex flex-col justify-center 
        items-center absolute  top-0 left-0 w-full h-screen bg-gradient-to-b from-black  to-gray-700
        z-10"
          >
            {links.map((link) => {
              return (
                <li key={link.id} className="cursor-pointer py-3 text-3xl">
                  <Link
                    onClick={() => setNav(!nav)}
                    to={link.link}
                    smooth
                    duration={500}
                  >
                    // {link.link}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
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
                    <Link to={link.link} smooth duration={500}>
                      // {link.link}
                    </Link>
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
