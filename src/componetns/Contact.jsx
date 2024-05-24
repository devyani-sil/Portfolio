import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="bg-[#120117]">
      <section
        id="contact"
        name="contact"
        className="pt-8 flex items-center text-white "
      >
        <div className="lg:max-w-[80%] lg:mr-auto lg:ml-auto px-5">
          <h1 className="sm:mt-10 text-5xl font-bold">Get in touch⚡⚡</h1>
          <div className="py-4 flex-col-reverse  flex md:flex-row gap-10 ">
            <form
              action="https://getform.io/f/b54f4bbc-e270-4281-afed-0b8bf3e1f2d8"
              method="POST"
              className="flex flex-col w-full sm:w-2/3 ml-auto mr-auto"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className=" p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                type="text"
                name="message"
                rows="10"
                placeholder="Enter your message"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <button
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6
            py-3 my-8 mx-auto flex items-center rounded-md hover:drop-shadow-[0_2px_8px_#61dbfb] hover:scale-105 duration-100"
              >
                Send
              </button>
            </form>
            <div className="flex flex-col gap-5">
              <div className="">
                <p className="text-3xl/tight font-bold mb-4">
                  Available for freelance opportunities
                </p>
                <p className="text-xl tracking-light">
                  Have a fun project that needs assistance? Contact me through
                  instant messaging or by sending me an email!
                </p>
              </div>
              <div className="flex flex-wrap md:justify-start gap-5  ">
                <div className="hover:cursor-pointer  hover:drop-shadow-[0_2px_4px_#61dbfb]">
                  <a href="mailto:mirthpawar0408@gmail.com">
                    <AiOutlineMail size={50} />
                  </a>
                </div>
                <div className="hover:cursor-pointer hover:drop-shadow-[0_2px_4px_#61dbfb]">
                  <a href="https://github.com/Mirthhh08" target="_blank">
                    <AiFillGithub size={50} />
                  </a>
                </div>
                <div className="hover:cursor-pointer hover:drop-shadow-[0_2px_4px_#61dbfb]">
                  <a
                    href="https://www.linkedin.com/in/mirth-pawar-m08/"
                    target="_blank"
                  >
                    <AiFillLinkedin size={50} />
                  </a>
                </div>
                <div className="hover:cursor-pointer hover:drop-shadow-[0_2px_4px_#61dbfb]">
                  <a href="https://twitter.com/mirthhhh_" target="_blank">
                    <AiFillTwitterCircle size={50} />
                  </a>
                </div>
                <div className="hover:cursor-pointer hover:drop-shadow-[0_2px_4px_#61dbfb]">
                  <a
                    href="https://www.instagram.com/mirthhhh_/"
                    target="_blank"
                  >
                    <AiOutlineInstagram size={50} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
