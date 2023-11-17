import React from "react";
import { motion } from "framer-motion";

const Scroll = () => {
  return (
    <motion.div
      animate={{
        y: [0, 24, 0],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeattype: "loop",
      }}
      className="w-2 h-2 rounded-full text-xl bg-gray-300 "
    />
  );
};

export default Scroll;
