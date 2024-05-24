import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Footer = () => {
  return (
    <footer
      className={`text-white  font-semibold flex justify-center items-center sm:p-5 bg-transparent`}
    >
      <div className="">&copy; || Developed with ❤️ by Mirth Pawar</div>
    </footer>
  );
};

export default Footer;
